const sendNotification = async (msg) => {
  if (msg instanceof Error) {
    console.error(msg);
    msg = `❌ [${process.env.FTP_USER}] Backups error. Logs: ${msg.message}`;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram bot token or chat id not provided");
    return;
  }

  try {
    await fetch(`https://api.telegram.org/${token}/sendMessage?chat_id=${chatId}&chat_type=private&text=${msg}&parse_mode=Markdown`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  sendNotification,
};
