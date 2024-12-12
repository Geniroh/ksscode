import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>Top Players</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto h-96">
          <table className="w-full text-left divide-y">
            <thead>
              <tr className="text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Player</th>
                <th className="px-4 py-3">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3 font-medium">1</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Alice
                </td>
                <td className="px-4 py-3 font-medium">350</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3 font-medium">2</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Bob
                </td>
                <td className="px-4 py-3 font-medium">300</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3 font-medium">3</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Carol
                </td>
                <td className="px-4 py-3 font-medium">280</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  David
                </td>
                <td className="px-4 py-3">250</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Eve
                </td>
                <td className="px-4 py-3">200</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3">6</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Frank
                </td>
                <td className="px-4 py-3">180</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3">7</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Grace
                </td>
                <td className="px-4 py-3">160</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3">8</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Helen
                </td>
                <td className="px-4 py-3">140</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3">9</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Ian
                </td>
                <td className="px-4 py-3">120</td>
              </tr>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    {/* <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      alt="Avatar"
                      className="rounded-full object-cover object-center border"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    /> */}
                  </div>
                  Jack
                </td>
                <td className="px-4 py-3">100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full justify-start">
          View All
        </Button>
      </CardFooter>
    </Card>
  );
}
