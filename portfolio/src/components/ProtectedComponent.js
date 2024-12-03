import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProtectedComponent() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [projectData, setProjectData] = useState(null);

  const data = [
    {
      id: 1,
      chipset: "Lunar Lake",
      connection: "USB",
      device: "Mouse",
      manufacturer: "Logitech",
      rating: "1",
    },
    {
      id: 2,
      chipset: "Raptor Lake",
      connection: "Bluetooth",
      device: "Headphones",
      manufacturer: "Apple",
      rating: "5",
    },
    {
      id: 3,
      chipset: "Meteor Lake",
      connection: "Thunderbolt",
      device: "Monitor",
      manufacturer: "Dell",
      rating: "3",
    },
  ];

  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-backend-71iqtklg7-shirvil-sheths-projects.vercel.app/api/verify-password", // Replace with your Vercel API URL
        { password }
      );
      setProjectData(response.data.content);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Incorrect password. Please try again.");
      setProjectData(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  if (projectData) {
    return (
      <motion.div
        className="flex flex-col items-center border w-full max-w-5xl border-black bg-primaryColor shadow-2xl p-8 mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col text-center items-center">
          <h2 className="font-ariata pb-2">{projectData.header}</h2>
          <h1 className="font-ariata text-4xl w-full">{projectData.title}</h1>
          <h1 className="font-ariata text-l w-full mt-2">
            {projectData.technologies}
          </h1>{" "}
          <img className="w-11 pt-2" src="intel.png" />
        </div>

        <div className="flex flex-col w-full text-left font-consolas text-sm pt-8">
          {/* Text Section */}
          <h2 className="font-ariata text-xl">{projectData.sections[0]}</h2>
          <hr className="border-white my-2" />
          <h2>{projectData.purpose}</h2>
          <h2 className="font-ariata text-xl mt-2">
            {projectData.sections[1]}
          </h2>
          <hr className="border-white my-2" />
          <h2 className="mb-2">{projectData.ts[0]}</h2>
          <h2>{projectData.ts[1]}</h2>{" "}
          <ul className="list-disc px-10 py-6">
            <li className="my-2">
              {projectData.ts[2]}
              <br></br>
              {projectData.ts[3]}
            </li>
            <li className="my-2">
              {projectData.ts[4]}
              <br></br>
              {projectData.ts[5]}
            </li>
            <li className="my-2">
              {projectData.ts[6]}
              <br></br>
              {projectData.ts[7]}
            </li>
          </ul>
          <h2 className="font-ariata text-xl mt-2">
            {projectData.sections[2]}
          </h2>
          <hr className="border-white my-2" />
          <h2>
            {projectData.adc[0]} <br></br> {projectData.adc[1]}
          </h2>
          <table className="min-w-full border-collapse border border-gray-300 text-sm my-4">
            <thead className="text-base">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {projectData.columns[0]}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {projectData.columns[1]}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {projectData.columns[2]}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {projectData.columns[3]}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {projectData.columns[4]}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {projectData.columns[5]}
                </th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((row) => (
                <tr key={row.ID} className="">
                  <td className="border border-gray-300 px-4 py-2">{row.ID}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row["Chipset"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row["Connection Type"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row["Device Type"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row["Manufacturer"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row["User Rating"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="font-ariata text-xl mt-2">Implementation</h2>
          <hr className="border-white my-2" />
          <h2>
            One effective way to gather user feedback is through triggered popup
            forms. When a user performs an action of interest, a feedback form
            will appear in the bottom-right corner of the UI. Since this
            approach relies on event-driven feedback, implementing multiple
            event listeners is essential. To handle the simultaneous tracking of
            various events, the tool must be multithreaded, enabling it to
            monitor several event types at once. We can define four primary
            triggers: Wi-Fi, physical hardware, Microsoft Teams, and Bluetooth.
            A key advantage of this design is its flexibility—specific triggers
            can be enabled or disabled as needed without disrupting the overall
            functionality of the program.
          </h2>
          <h2 className="font-ariata text-base mt-6">Win32 Queries</h2>
          <hr className="border-white my-1" />
          <h2>
            A Win32 query refers to a request made to the Windows Management
            Instrumentation (WMI) system to gather information about
            Windows-based systems. Win32 classes, which are part of WMI, provide
            access to a vast array of system details, including processes,
            hardware, software, user accounts, network configurations, and more.
            This capability greatly simplifies tracking connectivity. By using
            the query below, we can monitor when a user connects a physical
            device through one of the PC's physical ports or establishes a
            wireless connection like internet or Bluetooth.
          </h2>
          <div className="py-4">
            <SyntaxHighlighter language="csharp" style={oneDark}>
              ManagementObjectSearcher searcher = new
              ManagementObjectSearcher("SELECT * FROM Win32_PnPEntity WHERE
              Status = 'OK'");
            </SyntaxHighlighter>
          </div>
          <h2>
            Using the data returned by this query, we can implement
            sophisticated string parsing to determine the type of connection
            that occurred and extract the fields of interest based on that
            information. Some data points, however, present unique challenges.
            For instance, the manufacturer of a device is not directly
            accessible through a Win32 query. While this limitation exists, the
            device's MAC address is typically available. Leveraging free online
            APIs, such as those that map MAC addresses to their corresponding
            manufacturers, allows us to fill this gap effectively.
          </h2>
          <h2 className="py-4">
            Using the data returned by this query, we can implement string
            parsing to determine the type of connection that occurred and
            extract the fields of interest based on that information. Some data
            points, however, present unique challenges. For instance, the
            manufacturer of a device is not directly accessible through a Win32
            query. While this limitation exists, the device's MAC address is
            typically available. Leveraging free online APIs, such as those that
            map MAC addresses to their corresponding manufacturers, allows us to
            fill this gap effectively.
          </h2>
          <h2 className="py-4">
            For Bluetooth devices, although Win32 queries provide basic
            information, their scope is limited and insufficient for more
            nuanced requirements. To address this, we can integrate specialized
            tools, such as the powerful Bluetooth library 32feet.NET, available
            for .NET. This library offers an extensive API for interacting with
            Bluetooth devices, enabling high-level access to data about
            connections, device properties, and more. For application-based
            triggers, such as those involving Microsoft Teams, Microsoft offers
            the Graph API. This API provides comprehensive event alerts,
            allowing the triggering of popups of interest rather simple.
          </h2>
          <h2 className="py-4">
            By combining these techniques we create a comprehensive solution
            capable of retrieving all necessary data. This approach enhances the
            accuracy and depth of insights and also enables the development of
            actionable user experience (UX) improvements. Such a multi-faceted
            strategy ensures the program is equipped to handle diverse
            scenarios, providing robust functionality and valuable analytics.
          </h2>
          <h2 className="font-ariata text-xl">Popup</h2>
          <hr className="border-white my-2" />
          <h2>
            It's essential for the popup to remain unobtrusive and avoid being
            perceived as nagware. Implementing features like cooldown periods
            and interval-based triggers ensures the popup minimizes screen space
            usage while maintaining user-friendly behavior.
          </h2>
          <h2 className="py-4">
            Below is the popup shown to Intel PC users when they trigger an
            event of interest (Microsoft Teams Meeting as an example).
          </h2>
          <div className="w-full justify-center flex py-8">
            <img src="intelpopup.png" className="w-2/3"></img>
          </div>
          <h2 className="font-ariata text-xl">Discussion</h2>
          <hr className="border-white my-2" />
          <h2 className="text-lg">Leveraging AI for Sentiment Analysis</h2>
          <h2 className="pb-4">
            Integrating AI-driven sentiment analysis (e.g. Hugging Face) can
            provide deeper insights into user feedback. Natural language
            processing models can categorize written feedback into themes like
            "ease of use," "performance issues," or "compatibility concerns."
            These insights can identify systemic issues, such as recurring "slow
            performance" themes with specific devices on Lunar Lake chipsets,
            enabling targeted optimizations.
          </h2>
          <h2 className="text-lg">Expanding Trigger Categories</h2>
          <ul className="list-disc px-10 py-6">
            <li className="my-2">
              Power Events: <br></br>Feedback on battery performance or
              power-saving modes.
            </li>
            <li className="my-2">
              Error States: <br></br>Sentiment following crashes or system
              errors.
            </li>
            <li className="my-2">
              Resource-Intensive Tasks: <br></br>Performance feedback during
              high-demand activities like gaming or rendering.
            </li>
          </ul>
          <h2 className="text-lg">Real-Time Dashboard for Developers</h2>
          <h2>
            A companion dashboard could provide engineers and product managers
            with real-time visualizations of user feedback. Using technologies
            like AWS OpenSearch or Google BigQuery, aggregated data could be
            displayed through dynamic graphs, heatmaps, and sentiment trends.
            This dashboard would allow teams to identify high-impact issues
            immediately and monitor the effectiveness of deployed fixes.
          </h2>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-8 text-black font-ariata">
      <div className="relative flex items-center">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress} // Submit on Enter key
          className="w-full p-2 border rounded pl-4 pr-10" // Space for the icon button
        />
        <button
          onClick={handlePasswordSubmit}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 text-black rounded-full p-2 flex items-center justify-center"
        >
          <FaRegArrowAltCircleRight />
        </button>
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default ProtectedComponent;
