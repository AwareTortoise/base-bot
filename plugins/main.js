class Main {
    static get name() {
        return 'main';
    }

    constructor(bot) {
        this.bot = bot;
        this._handleMessage = this._handleMessage.bind(this);
    }

    enable() {
        this.bot.on('message', this._handleMessage);
    }

    disable() {
        this.bot.removeListener('message', this._handleMessage);
    }

    async _handleMessage(message) {
        
        }
    }
}

module.exports = Main;
