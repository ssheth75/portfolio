import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

const Test = ({}) => {
  return (
    <motion.div
      className="flex flex-col items-center border w-full max-w-5xl border-black bg-primaryColor shadow-2xl p-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col text-center items-center">
        <h2 className="font-ariata pb-2">
          Shirvil Sheth · Intel Corporation Software Engineer Intern · Summer
          2024
        </h2>
        <h1 className="font-ariata text-4xl w-full">
          Event-Driven User Feedback for UX Optimizations
        </h1>
        <h1 className="font-ariata text-l w-full mt-2">
          C# | MySql | Multithreading | .NET
        </h1>{" "}
        <img className="w-11 pt-2" src="intel.png" />
      </div>

      <div className="flex flex-col w-full text-left font-consolas text-sm pt-8">
        {/* Text Section */}
        <h2 className="font-ariata text-xl">Purpose</h2>
        <hr className="border-white my-2" />
        <h2>
          User experience (UX) is a key factor in the success of modern software
          systems. Ensuring seamless interactions during critical system events
          goes beyond reliable functionality—it requires addressing and
          resolving the real challenges users encounter. User sentiment is a
          crucial indicator of a product's success, as it directly reflects how
          well the product meets user expectations and satisfies their needs. By
          understanding sentiment, organizations can prioritize improvements
          that truly matter to users, generating loyalty and adoption. This
          project introduces an Event-Driven User Feedback Framework for UX
          Optimizations, designed to gather real-time feedback from users during
          specific system events on Intel PCs. This framework identifies issues
          as they occur while capturing real-world data that is difficult to
          replicate in a lab setting at scale. By doing so, it bridges the gap
          between user expectations and technical performance, offering powerful
          insights when debugging and analyzing common user pain points. I will
          explore the process behind selecting events to track, the development
          of the framework, and the actionable insights derived from this
          project to drive product success.
        </h2>
        <h2 className="font-ariata text-xl mt-2">Trigger Selection</h2>
        <hr className="border-white my-2" />
        <h2 className="mb-2">
          When selecting triggers for this framework, it is essential to focus
          on common pain points and areas of concern for UX. To ensure
          adaptability, the project is designed as a modular framework, allowing
          quick and easy updates to the list of tracked triggers as needs and
          priorities evolve.
        </h2>
        <h2>
          For the initial iteration, the framework targets the following
          triggers:
        </h2>{" "}
        <ul className="list-disc px-10 py-6">
          <li className="my-2">
            Physical I/O Connections: <br></br>This includes Thunderbolt, USB
            3.0, HDMI, display connections, microphones, headsets, and other
            hardware interfaces.
          </li>
          <li className="my-2">
            Wireless Connectivity: <br></br>Events related to Wi-Fi and
            Bluetooth connections.
          </li>
          <li className="my-2">
            Application-Specific Events: <br></br>At the time of this project,
            Microsoft Teams was identified as a common UX pain point, so the
            framework tracks when a user leaves a Teams meeting.
          </li>
        </ul>
        <h2 className="font-ariata text-xl mt-2">Actionable Data Collection</h2>
        <hr className="border-white my-2" />
        <h2>
          Collecting actionable data is essential for driving positive changes
          to Intel PCs, particularly in understanding UX discrepancies across
          different chipsets (e.g. Lunar Lake, Raptor Lake, Meteor Lake).
          Additionally, identifying the type and brand of connected devices for
          physical hardware connections provides valuable insights into which
          peripherals may be causing issues for users (e.g., Apple AirPods, Dell
          monitors, Logitech mice). The primary focus is to gather user ratings
          for these events on a 1–5 scale, supplemented by an optional written
          description of the event. This data will enable us to aggregate
          overall sentiment regarding the outlined criteria for Intel chips and
          drivers. Importantly, sensitive information such as event logs or
          user-specific data will remain off-limits to ensure user privacy and
          uphold Application Security standards. <br></br> <br></br> Below is an
          example of what a data set would look like:
        </h2>
        <table className="min-w-full border-collapse border border-gray-300 text-sm my-4">
          <thead className="text-base">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Chipset
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Connection Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Device Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Manufacturer
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                User Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="">
                <td className="border border-gray-300 px-4 py-2">{row.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.chipset}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.connection}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.device}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.manufacturer}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.rating}
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
          will appear in the bottom-right corner of the UI. Since this approach
          relies on event-driven feedback, implementing multiple event listeners
          is essential. To handle the simultaneous tracking of various events,
          the tool must be multithreaded, enabling it to monitor several event
          types at once. We can define four primary triggers: Wi-Fi, physical
          hardware, Microsoft Teams, and Bluetooth. A key advantage of this
          design is its flexibility—specific triggers can be enabled or disabled
          as needed without disrupting the overall functionality of the program.
        </h2>
        <h2 className="font-ariata text-base mt-6">Win32 Queries</h2>
        <hr className="border-white my-1" />
        <h2>
          A Win32 query refers to a request made to the Windows Management
          Instrumentation (WMI) system to gather information about Windows-based
          systems. Win32 classes, which are part of WMI, provide access to a
          vast array of system details, including processes, hardware, software,
          user accounts, network configurations, and more. This capability
          greatly simplifies tracking connectivity. By using the query below, we
          can monitor when a user connects a physical device through one of the
          PC's physical ports or establishes a wireless connection like internet
          or Bluetooth.
        </h2>
        <div className="py-4">
          <SyntaxHighlighter language="csharp" style={oneDark}>
            ManagementObjectSearcher searcher = new
            ManagementObjectSearcher("SELECT * FROM Win32_PnPEntity WHERE Status
            = 'OK'");
          </SyntaxHighlighter>
        </div>
        <h2>
          Using the data returned by this query, we can implement sophisticated
          string parsing to determine the type of connection that occurred and
          extract the fields of interest based on that information. Some data
          points, however, present unique challenges. For instance, the
          manufacturer of a device is not directly accessible through a Win32
          query. While this limitation exists, the device's MAC address is
          typically available. Leveraging free online APIs, such as those that
          map MAC addresses to their corresponding manufacturers, allows us to
          fill this gap effectively.
        </h2>
        <h2 className="py-4">
          Using the data returned by this query, we can implement string parsing
          to determine the type of connection that occurred and extract the
          fields of interest based on that information. Some data points,
          however, present unique challenges. For instance, the manufacturer of
          a device is not directly accessible through a Win32 query. While this
          limitation exists, the device's MAC address is typically available.
          Leveraging free online APIs, such as those that map MAC addresses to
          their corresponding manufacturers, allows us to fill this gap
          effectively.
        </h2>
        <h2 className="py-4">
          For Bluetooth devices, although Win32 queries provide basic
          information, their scope is limited and insufficient for more nuanced
          requirements. To address this, we can integrate specialized tools,
          such as the powerful Bluetooth library 32feet.NET, available for .NET.
          This library offers an extensive API for interacting with Bluetooth
          devices, enabling high-level access to data about connections, device
          properties, and more. For application-based triggers, such as those
          involving Microsoft Teams, Microsoft offers the Graph API. This API
          provides comprehensive event alerts, allowing the triggering of popups
          of interest rather simple.
        </h2>
        <h2 className="py-4">
          By combining these techniques we create a comprehensive solution
          capable of retrieving all necessary data. This approach enhances the
          accuracy and depth of insights and also enables the development of
          actionable user experience (UX) improvements. Such a multi-faceted
          strategy ensures the program is equipped to handle diverse scenarios,
          providing robust functionality and valuable analytics.
        </h2>
        <h2 className="font-ariata text-xl">Popup</h2>
        <hr className="border-white my-2" />
        <h2>
          It's essential for the popup to remain unobtrusive and avoid being
          perceived as nagware. Implementing features like cooldown periods and
          interval-based triggers ensures the popup minimizes screen space usage
          while maintaining user-friendly behavior.
        </h2>
        <h2 className="py-4">
          Below is the popup shown to Intel PC users when they trigger an event
          of interest (Microsoft Teams Meeting as an example).
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
            Error States: <br></br>Sentiment following crashes or system errors.
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
          displayed through dynamic graphs, heatmaps, and sentiment trends. This
          dashboard would allow teams to identify high-impact issues immediately
          and monitor the effectiveness of deployed fixes.
        </h2>
      </div>
    </motion.div>
  );
};

export default Test;
