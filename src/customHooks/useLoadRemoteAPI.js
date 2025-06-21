// hooks/useLoadRemoteAPI.js
import { useEffect, useState } from "react";

/**
 * Custom hook to load a remote API script and extract its exported functions.
 * This hook asynchronously fetches the JavaScript code from a remote URL,
 * evaluates it, and sets the `fetchAPI` and `submitAPI` functions for use in the
 * application. The hook returns these functions as part of an object.
 *
 * @return {Object} An object containing:
 * - fetchAPI: Function to fetch available booking times.
 * - submitAPI: Function to submit booking data.
 */
export const useLoadRemoteAPI = () => {
  const [fetchAPI, setFetchAPI] = useState(null);
  const [submitAPI, setSubmitAPI] = useState(null);

  useEffect(() => {
    const fetchRemoteAPI = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
        );
        const code = await response.text();

        const remote = {};
        // eslint-disable-next-line no-eval
        eval(`
          ${code}
          remote.seededRandom = seededRandom;
          remote.fetchAPI = fetchAPI;
          remote.submitAPI = submitAPI;
        `);

        setFetchAPI(() => remote.fetchAPI);
        setSubmitAPI(() => remote.submitAPI);
        console.log("✅ Remote API loaded successfully");
      } catch (err) {
        console.error("❌ Failed to load remote API:", err);
      }
    };

    fetchRemoteAPI();
  }, []);

  return { fetchAPI, submitAPI };
};
