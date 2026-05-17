const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const axios = require("axios");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
    const binarySearch = function search(arr, x) {
        let lo = 0; hi = arr.length -1;
        while(lo <= hi) {
            let mid = lo + Math.floor((hi - lo)/2);
            if(arr[mid] == x) return mid;
            else if(arr[mid] < x) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        return undefined;
    }
`;
try {
    bot.start((ctx) => ctx.reply("Welcome"));

    bot.command("binarysearch", (ctx) => ctx.reply(binarySearchString));
    bot.command("binarytreejs", async (ctx) => {
        const response = await axios.get(
            "https://raw.githubusercontent.com/singhsanket143/FrontendDSA/refs/heads/master/Aug_29/trees.js",
        );
        console.log(response.data);
        ctx.reply(response.data);
    });
    bot.help((ctx) => ctx.reply("Send me a sticker"));
    bot.on(message("sticker"), (ctx) => ctx.reply("Hey sticker"));
    bot.on(message("text"), (ctx) => {
        console.log(ctx.update.message);
        if (ctx.update.message.text == "I love you") {
            ctx.reply("i love you to broo");
        } else {
            ctx.reply("i don't understand humans");
        }
    });
    bot.launch();
} catch {
    console.log("Unexpected Commamd");
}
