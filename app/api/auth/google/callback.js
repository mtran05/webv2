// pages/api/auth/google/callback.js

import { google } from 'googleapis';

export default async (req, res) => {
  const { code } = req.query;

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  const oauth2 = google.oauth2({
    version: 'v2',
    auth: oauth2Client,
  });

  const { data } = await oauth2.userinfo.get();
  const { email, name, picture } = data;

  // You can now use the user information (email, name, picture) to authenticate the user in your application

  res.status(200).json({ email, name, picture });
};
