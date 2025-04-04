"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CommunityCard from "../components/CommunutyCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, TrendingUp, Zap, Leaf, DollarSign } from "lucide-react";

// ✅ Full image map for 20 communities
const imageMap: Record<string, string> = {
  "Athens County": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/359598fa-6312-48da-81af-c1e3e286638d/Athens-County.jpg?format=1500w",
  "City of Athens": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/382a4797-179f-4bdd-b024-2b5d0b48cc64/Image_20240624_140201_424.jpg?format=1500w",
  "Village of Amesville": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/14ae5410-6f88-4cd0-9c77-d73b66af7f19/IMG-1286.jpg?format=1500w",
  "City of Logan": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/e8bcc98c-f80c-4f4d-98ed-78a456536c08/Logan%2B-%2B12.21.png?format=1500w",
  "Village of Trimble": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/1708962089582-2ES71QNIC7K9BX1IWUPP/Trimble_municipal_building_from_northwest.jpg?format=1500w",
  "Village of Albany": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/ff28314f-d58c-4c65-adf8-7a78ce7bd22e/20210702_184427.jpg?format=1500w",
  "City of Nelsonville": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/15e86375-fe19-45ea-a153-83273c639893/20200514_201400.jpg?format=1500w",
  "Village of Chauncey": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/7283862a-8091-4bba-9bb6-2bc034d53e02/Jacobs_east_of_Monroe%2C_Chauncey.jpg?format=1500w",
  "Village of Glouster": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/41cf91b5-482b-4022-9492-8c889d053ef2/117694627_2673863069552754_776119817172380955_n.jpg?format=1500w",
  "Village of Buchtel": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/3c064679-265f-428e-8415-ed97c010f385/2560px-St_Mary_of_the_Hills%2C_Buchtel.jpg?format=1500w",
  "City of McArthur": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/5d7e72c2-c525-4110-be9c-3b5417d4bf0c/20210607_174415_HDR.jpg?format=1500w",
  "Village of New Straitsville": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/07ea144b-9407-485e-8feb-817119a7013e/New-Straitsville-web.jpg?format=1500w",
  "Village of Roseville": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/b0337c2c-4611-48b4-8549-40842cbce560/Document.jpg?format=1500w",
  "Village of Crooksville": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/8439edab-52ce-4c84-97ef-fdba5f6f7eed/Screenshot%2B2024-02-06%2Bat%2B1.49.52%E2%80%AFPM.png?format=1500w",
  "City of Wellston": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/e09fa45a-5fee-4ced-b65e-e36a1a9227fa/main.png?format=1500w",
  "Village of Oak Hill": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/1708962016598-CEPGCBQXCMY2F6YTNEAI/unnamed.jpg?format=1500w",
  "Village of Coalton": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/114c90d5-e1b6-4fd5-85f2-5a9148353c03/341710959_1005500287085747_2192449091473607173_n.jpg?format=1500w",
  "City of Gallipolis": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/f6097ada-11ec-4789-8f7a-b000a58edfe7/Gallipolis%2B-%2BMurphy%2BCo..jpg?format=1500w",
  "Village of Rio Grande": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/fb369bd0-981e-4944-ac6b-a5e7197b6036/Marble%2BCliff%2B-%2BEV%2BSolar%2B-%2BMunicipal%2BBuilding.jpg?format=1500w",
  "Village of Centerville": "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/ac476c11-20ff-4f62-ae7a-9f36b40fcbad/Screenshot%2B2024-02-06%2Bat%2B2.06.53%E2%80%AFPM.png?format=1500w",
};

const communities = Object.keys(imageMap).map((name) => ({
  name,
  population: Math.floor(Math.random() * 40000) + 1000,
  region: "Southeast Ohio",
  joined: `20${Math.floor(Math.random() * 10 + 10)}`,
}));

const leaderboardSections = [
  {
    title: "Top Profits",
    icon: <Trophy className="w-5 h-5 text-green-600" />,
    description: "Highest revenue-generating communities.",
    list: [communities[0]],
  },
  {
    title: "Fastest Growing",
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    description: "Communities with high growth rates.",
    list: [communities[1], communities[2]],
  },
  {
    title: "Most Efficient",
    icon: <Zap className="w-5 h-5 text-yellow-500" />,
    description: "Energy and utility efficiency leaders.",
    list: communities.slice(3, 8),
  },
  {
    title: "Sustainability Leaders",
    icon: <Leaf className="w-5 h-5 text-lime-600" />,
    description: "Sustainable and green-first communities.",
    list: communities.slice(8, 10),
  },
  {
    title: "Cost Savers",
    icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
    description: "Top cost-saving municipalities.",
    list: communities.slice(10, 12),
  },
];

export default function CommunitiesPage() {
  return (
    <div className="admin-container w-full px-4 sm:px-6 py-8 space-y-12 max-w-screen-xl mx-auto">
      {leaderboardSections.map((section, index) => (
        <section key={index} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-800 flex items-center gap-2">
              {section.icon} {section.title}
            </h2>
            <p className="text-sm text-zinc-500">{section.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {section.list.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="hover:border-green-500 hover:shadow-lg transition bg-white border border-zinc-200">
                  <CardHeader className="flex justify-between items-center gap-4">
                    <div>
                      <CardTitle className="text-lg font-semibold text-zinc-800">{item.name}</CardTitle>
                      <p className="text-sm text-zinc-500 font-normal">
                        <strong>Region:</strong> {item.region}<br />
                        <strong>Joined:</strong> {item.joined}
                      </p>
                    </div>
                    {imageMap[item.name] && (
                      <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-zinc-200">
                        <Image
                          src={imageMap[item.name]}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      <div className="pt-10 space-y-6">
        <h2 className="text-2xl font-bold text-zinc-800">All Communities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {communities.map((community, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
            >
              <CommunityCard
                name={community.name}
                population={community.population}
                region={community.region}
                joined={community.joined}
                image={imageMap[community.name]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
