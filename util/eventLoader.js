const reqEvent = (event) => require(`../events/${event}`);
module.exports = async (client, message) => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('disconnect', () => reqEvent('disconnect')(client));
  client.on('message', reqEvent('message'));
  client.on('guildCreate', () => reqEvent('guildCreate')(client));
};
