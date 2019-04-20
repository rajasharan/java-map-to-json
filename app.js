var run = require('./index_compiled.js');
window.run = run;

function debug() {
    var result = run('{name=raja, email=rajasharan@gmail.com}', false);
    if (result.err) console.log(err.message);
    else console.log(result.data);
}

function parse(input) {
    var res = run(input, false);
    if (res.err) return res.err.message;
    else return JSON.stringify(res.data, null, 2);
}

var app = new Vue({
    el: '#app',
    data: {
        isActive: false,
        output: '',
        input: '{PATH=/home/linuxbrew/.linuxbrew/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games, XAUTHORITY=/run/user/1000/gdm/Xauthority, LC_MEASUREMENT=en_US.UTF-8, LC_TELEPHONE=en_US.UTF-8, XMODIFIERS=@im=ibus, MANDATORY_PATH=/usr/share/gconf/pop.mandatory.path, GDMSESSION=pop, XDG_DATA_DIRS=/usr/share/pop:/usr/local/share/:/usr/share/, LC_TIME=en_US.UTF-8, PAPERSIZE=letter, GTK_IM_MODULE=ibus, DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus, DEFAULTS_PATH=/usr/share/gconf/pop.default.path, XDG_CURRENT_DESKTOP=pop:GNOME, SSH_AGENT_PID=9012, QT4_IM_MODULE=xim, USERNAME=raja, SESSION_MANAGER=local/pop-os:@/tmp/.ICE-unix/8884,unix/pop-os:/tmp/.ICE-unix/8884, LC_PAPER=en_US.UTF-8, LOGNAME=raja, PWD=/home/raja/projects/java-projects/consul-connector, IM_CONFIG_PHASE=2, LANGUAGE=en_US:en, GJS_DEBUG_TOPICS=JS ERROR;JS LOG, SHELL=/home/linuxbrew/.linuxbrew/bin/zsh, LC_ADDRESS=en_US.UTF-8, GIO_LAUNCHED_DESKTOP_FILE=/home/raja/.local/share/applications/jetbrains-idea-ce.desktop, OLDPWD=/home/raja/Downloads/idea-IC-183.5429.30/bin, GNOME_DESKTOP_SESSION_ID=this-is-deprecated, GTK_MODULES=gail:atk-bridge, CLUTTER_IM_MODULE=xim, XDG_SESSION_DESKTOP=pop, SHLVL=0, LC_IDENTIFICATION=en_US.UTF-8, LC_MONETARY=en_US.UTF-8, QT_IM_MODULE=xim, XDG_CONFIG_DIRS=/etc/xdg/xdg-pop:/etc/xdg, LANG=en_US.UTF-8, XDG_SESSION_TYPE=x11, XDG_SESSION_ID=4, DISPLAY=:1, LC_NAME=en_US.UTF-8, DESKTOP_SESSION=pop, GPG_AGENT_INFO=/run/user/1000/gnupg/S.gpg-agent:0:1, USER=raja, XDG_MENU_PREFIX=gnome-, GIO_LAUNCHED_DESKTOP_FILE_PID=21454, WINDOWPATH=2, QT_ACCESSIBILITY=1, GJS_DEBUG_OUTPUT=stderr, LC_NUMERIC=en_US.UTF-8, XDG_SEAT=seat0, SSH_AUTH_SOCK=/run/user/1000/keyring/ssh, GNOME_SHELL_SESSION_MODE=pop, XDG_RUNTIME_DIR=/run/user/1000, XDG_VTNR=2, HOME=/home/raja}'
    },
    created: function() {
        this.output = parse(this.input);
    },
    watch: {
        input: function (newInput, oldInput) {
            this.output = parse(newInput);
        }
    }
});
