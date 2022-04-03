/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, serviceworker, es6 */

'use strict';

self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Launch Alert!';
    const options = {
      body: 'Yay it works.',
      icon: '/logo.png'
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });

  self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
      const options = {}
      const subscription = await self.registration.pushManager.subscribe(options)
      console.log(JSON.stringify(subscription))
      console.log("LYNXED!");
    } catch (err) {
      console.log('Error', err)
    }
  })
