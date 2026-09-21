/* 
 * index.js
 * Core router for the Calciom Website Worker.
 * Serves static framework presentation assets from the /public directory.
 */

import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(event, env, ctx) {
    try {
      // Look up and return the file inside the /public folder matching the request URL
      return await getAssetFromKV(event);
    } catch (e) {
      // Fallback fallback if an asset isn't found (e.g. 404 Not Found)
      return new Response("Calciom Document Not Found", { status: 404 });
    }
  },
};
