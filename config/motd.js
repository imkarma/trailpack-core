module.exports = {

  hr: `---------------------------------------------------------------`,

  info: {

    start: `Starting...`,
    stop: `Shutting down...`,
    initialized: `All trailpacks are loaded.`,
    ready (app) {
      return (
        `
      Server Ready.

      ---------------------------------------------------------------
        ${new Date()}
        Basic Info
          Application       : ${app.pkg.name}
          Version           : ${app.pkg.version}
          Environment       : ${process.env.NODE_ENV}`
      )
    }

  },


  debug: {

    ready (app) {
      return (
        ` Database Info
          ORM               : ${app.config.db.orm}
          Stores            : ${Object.keys(app.config.db.stores)}
        Web Server Info
          Engine            : ${app.config.server.engine}
          Routes            : ${app.routes.length}
          Host              : ${app.config.server.host}
          Port              : ${app.config.server.port}`
      )
    },

  },

  silly: {

    stop: `
      Happy trails to you, until we meet again.
      - Dale Evans
    `,

    ready (app) {
      return (
        ` API
          Models            : ${Object.keys(app.api.models)}
          Controllers       : ${Object.keys(app.api.controllers)}
          Policies          : ${Object.keys(app.api.policies)}
          Trailpacks        : ${app.packs.map(pack => pack.name)}`
        )
    },

    initialized: `
                                                 /
                                     \\       , //
                                     |\\.--._/|//
                                    /\\ ) ) ).'/
                                   /(  \\  // /
                                  /(   J'((_/ \\
                                 / ) | _\\     /
                                /|)  \\  eJ    L
                               /  )   L   \\/   \\
                              /  \\    J   (\\   /
           _....___          | \\      \\   \\'''
    ,.._.-'        '''--...-||\\     -. \\   \\
  .'.=.'                    '         '.\\ [ Y
 /   /                                  \\]  J
|   |          \\                        A  J
|    \\          Y                      ( |]/|
J     \\         /._                    -tI/ |
 L     )       /   /'-------.,           ''-:.
 J   .'      ,'  ,' ,      .  ''-.__          \\
  \\ T      ,'  ,'   )\\    /|        ';'---7   /
   \\|    ,'L  Y...-' / _.' /          \\  /   /
    J   Y  |  J    .'-'   /         ,--.(   /
     L  |  J   L -'     .'         /  |    /\\
      \\   L'-J   L____,.-''       |  _.-'   |
       |   L  ) _.'\\                    ) _.'\\
       \\    \\(''    \\                  (''    \\
        ) _.'\\'-....'                   '-....'
       (''    \\
        '-.___/
    `
  }
}
