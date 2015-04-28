(function () {

    var Notifications = Windows.UI.Notifications;
    function run() {
        
        var notBadge = Notifications.BadgeUpdateManager.getTemplateContent(
         Notifications.BadgeTemplateType.badgeGlyph);

        var n = parseInt(Math.random() * 99);

        var badgeAttr = notBadge.getElementsByTagName("badge");
        badgeAttr[0].setAttribute("value", n);
        var notificacion = new Notifications.BadgeNotification(notBadge);

        Notifications.BadgeUpdateManager.
            createBadgeUpdaterForApplication().update(notificacion);



        var template = Notifications.TileTemplateType.
           tileWidePeekImageCollection03;

        var tileXml = Notifications.TileUpdateManager.getTemplateContent(template);
        var texto = tileXml.getElementsByTagName("text");

        texto[0].appendChild(tileXml.createTextNode("Notificacion en en tile"));
        var pos = parseInt(Math.floor(Math.random() * 3)) + 1;
        var img = tileXml.getElementsByTagName("image");
        img[0].setAttribute("src", "ms-appx:///images/fondo0"+pos+".png");

        var notificacion = new Notifications.TileNotification(tileXml);
        Notifications.TileUpdateManager.createTileUpdaterForApplication().
            update(notificacion);


    }

    run();
})();