module.exports = {
    trigger: "ping",
    //? Tetiklenme İçeriği
    type: "command",
    //? Komutun Tetiklenme Tipi, Kullanılabilir: "regex" "contains" "end" "start" "exact" "command"
    aliases: ["p"],
    //? Eğer Tetiklenme tipi "command" ise ana komut dışındaki tetiklenmeler.
    guildOnly: false,
    //? Sadece Sunucularda'mı Çalışsın
    cooldown: {
        enable: true, //? true false
        timeout: 10, //? SANİYE
        type: "user", //? "any", "guild", "user", "member"
        errormsg: "Bi dur mk",
    },
    //* Bekleme Süresi
    //* enable: Açıksa true Kapalı İse False
    //* timeout: kaç saniye beklesinler
    //* type: ne kadar kapsamlı olsun Kullanılabilir: "any" (heryerde) "guild" (sunucu başına) "user" (kullanıcı başına) "member" (sunucudaki üye başına)
    //! guildOnly kapalı ise "guild" ve "member" çalışmaz!!!!
    //* errormsg: Hata Mesajı
    help: {
        name: "Ping",
        desc: "Botun ve discordun mevcut gecikmesini alır ve size iletir.",
    },
    //* Yardım Komutu İçin İsim ve Açıklama
    execute(msg, args, client, u) {
        const dping = msg.client.ws.ping;
        let bping;
        msg.channel
            .send(
                u.embed({
                    title: "Gecikme Ölçümü",
                    desc: "Acaba pingim kaç hadi bakalım 🤔",
                })
            )
            .then((x) => {
                bping = x.createdTimestamp - msg.createdTimestamp;
                x.edit(
                    u.embed({
                        title: "Gecikme Ölçümü",
                        desc: `Discord'un Pingi: ${dping} ms\nBot'un Pingi: ${bping} ms`,
                    })
                );
            });
    },
};
