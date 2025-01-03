require("dotenv").config();
const { beforeEach, backupFolders } = require("./utils/services");
const { sendNotification } = require("./utils/telegram");

(async () => {
  try {
    await beforeEach();
    await backupFolders();
  } catch (e) {
    await sendNotification(e);
    process.exit(1);
  }
})();
