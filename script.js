// ===== DONNÉES DES CONCOURS =====
const concoursList = [
    {
        id: 1,
        host: "Space Tomato Gaming",
        platform: "Gleam",
        description: "MISC Hull B Game Package",
        etat: "En cours", 
        dateFin: "2026-04-27 23:59",
        afficher: true,
        LienConcours: "https://gleam.io/LbjoA/misc-hull-b-game-package-space-tomato-gaming-giveaway",
        socials: {
            pageweb: "https://www.spacetomatogaming.com/",
            instagram: "https://www.instagram.com/spacetomatogaming/",
            x: "https://twitter.com/SpaceTomatoGG",
            tiktok: "https://www.tiktok.com/@spacetomatogaming",
            youtube: "https://www.youtube.com/c/SpaceTomato",
            twitch: "https://twitch.tv/SpaceTomatoGaming",
            discord: "https://discord.gg/spacetomato",
        }
    },
    {
        id: 2,
        host: "Chat du Chaos",
        platform: "Gleam",
        description: "MISC Hull B - Starter Pack LTI",
        etat: "En cours",
        dateFin: "2026-05-03 23:59",
        afficher: true,
        LienConcours: "https://gleam.io/HF1V0/hull-b-captains-of-industry-giveaway",
        socials: {
            pageweb: "https://www.chatduchaos.com/index.html",
            instagram: "https://www.instagram.com/chatduchaos/",
            x: "https://x.com/chatduchaos",
            tiktok: "https://www.tiktok.com/@chatduchaos",
            youtube: "https://www.youtube.com/@ChatDuChaos",
            twitch: "https://www.twitch.tv/chatduchaos",
            discord: "https://discord.com/invite/lataverneduchat",
        }
    },
    {
        id: 3,
        host: "CLX Gaming",
        platform: "Gleam",
        description: "Custom CLX Gaming PC + Aurora MKII avec LTI and Game Package",
        etat: "En cours",
        dateFin: "2026-05-04 23:59",
        afficher: true,
        LienConcours: "https://www.clxgaming.com/cig-clx-lvlupexpo2026-giveaway",
        socials: {
            pageweb: "https://www.clxgaming.com",
            instagram: "https://www.instagram.com/clxgaming",
            x: "https://x.com/clxgaming",
            tiktok: null,
            youtube: "https://www.youtube.com/clxgaming",
            twitch: "https://www.twitch.tv/clxgamingtv/",
            discord: null,
        }
    },
    {
        id: 4,
        host: "Mind1",
        platform: "Gleam",
        description: "MISC Hull B - Starter Pack LTI",
        etat: "En cours",
        dateFin: "2026-05-14 23:59",
        afficher: true,
        LienConcours: "https://mind1official.com/giveaway/",
        socials: {
            pageweb: "https://mind1official.com",
            instagram: "https://www.instagram.com/mind1official/",
            x: "https://x.com/Mind1Official",
            tiktok: "https://www.tiktok.com/@mind1official/",
            youtube: "https://www.youtube.com/@Mind1Official",
            twitch: "https://twitch.tv/Mind1",
            discord: null,
        }
    },
    {
        id: 5,
        host: "Ogeru",
        platform: "Gleam",
        description: "Lot 1 : RSI Aurora MKII LTI + Modules | Lots 2 : AEGIS Sabre Peregrine LTI + peinture + Fortuna Racing Suit + P4-AR Fortuna rifle",
        etat: "En cours",
        dateFin: "2026-05-14 23:59",
        afficher: true,
        LienConcours: "https://gleam.io/0HQiw/stella-fortuna-aurora-mk-ii-47-giveaway",
        socials: {
            pageweb: null,
            instagram: "https://www.instagram.com/ogerutwitch/",
            x: "https://twitter.com/OgeruTwitch",
            tiktok: null,
            youtube: "https://www.youtube.com/@ogerutwitch",
            twitch: "https://twitch.tv/ogeru",
            discord: "https://discord.gg/FdfdY2k3cr",
        }
    },
    {
        id: 6,
        host: "Polyvalence",
        platform: "test",
        description: "test",
        etat: "En cours",
        dateFin: null,
        afficher: false,
        LienConcours: "test",
        socials: {
            pageweb: 'https://polyvalence.io/',
            instagram: 'https://www.instagram.com/elbe_poly/',
            x: 'https://x.com/Elbe_Poly',
            tiktok: 'https://www.tiktok.com/@elbe_poly',
            youtube: 'https://www.youtube.com/@elbe_poly',
            twitch: 'https://www.twitch.tv/elbe_poly',
            discord: 'https://discord.gg/polyvalence',
        }
    },
    {
        id: 7,
        host: "TheCreeperEB",
        platform: "test",
        description: "test",
        etat: "En cours",
        dateFin: null,
        afficher: false,
        LienConcours: "test",
        socials: {
            pageweb: null,
            instagram: 'https://www.instagram.com/thecreepereb',
            x: 'https://x.com/thecreepereb',
            tiktok: 'https://www.tiktok.com/@thecreepereb',
            youtube: 'https://www.youtube.com/@thecreepereb',
            twitch: 'https://www.twitch.tv/thecreepereb',
            discord: 'https://discord.gg/gNSXvrJvhs',
        }
    },
    {
        id: 8,
        host: "Subliminal",
        platform: "Gleam",
        description: "test",
        etat: "En cours",
        dateFin: null,
        afficher: false,
        LienConcours: "test",
        socials: {
            pageweb: 'https://subliminal.gg/',
            instagram: null,
            x: 'https://www.twitter.com/SubliminalsTV',
            tiktok: null,
            youtube: 'https://www.youtube.com/SubliminalsTV',
            twitch: 'https://www.twitch.tv/subliminalstv',
            discord: 'https://discord.subliminal.gg/',
        }
    },
    {
        id: 9,
        host: "OldManObserver",
        platform: "Gleam",
        description: "Hull-B",
        etat: "En cours",
        dateFin: "2026-05-17 23:59",
        afficher: true,
        LienConcours: "https://gleam.io/tpKe9/omo-20260517-star-citizen-hullb-bracket-selection",
        socials: {
            pageweb: 'https://oldmanobserver.com/',
            instagram: 'https://www.instagram.com/oldmanobserver/',
            x: 'https://x.com/oldmanobserver',
            tiktok: 'https://www.tiktok.com/@oldmanobserver',
            youtube: 'https://www.youtube.com/@OldMan-Observer',
            twitch: 'https://www.twitch.tv/oldmanobserver',
            discord: 'https://discord.gg/GsqZavtk92',
        }
    },
    {
        id: 10,
        host: "iNEEDAPEA",
        platform: "Gleam",
        description: "test",
        etat: "En cours",
        dateFin: null,
        afficher: false,
        LienConcours: "https://ineedapea.com/",
        socials: {
            pageweb: null,
            instagram: 'https://www.instagram.com/twitch.ineedapea/',
            x: 'https://x.com/iNEEDAPEA',
            tiktok: null,
            youtube: null,
            twitch: null,
            discord: null,
        }
    }
];

// ===== FONCTION DE GÉNÉRATION DES CARTES =====
function generateConcoursCards() {
    const container = document.getElementById('concours-container');
    
    // Vider le conteneur
    container.innerHTML = '';
    
    // Créer une carte pour chaque concours
    concoursList.forEach(concours => {
        if (!concours.afficher) {
            return;
        }

        const card = createConcoursCard(concours);
        container.appendChild(card);
    });
}

// ===== FONCTION DE CRÉATION D'UNE CARTE =====
function createConcoursCard(concours) {
    const card = document.createElement('div');
    card.className = 'concours-card';
    card.setAttribute('data-id', concours.id);
    
    // Header
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
        <div class="card-host">${escapeHtml(concours.host)}</div>
        <div class="card-platform">${concours.platform}</div>
    `;
    
    // Content
    const content = document.createElement('div');
    content.className = 'card-content';
    content.textContent = concours.description;

    // Etat et temps restant (saisie manuelle)
    const statusInfo = createStatusInfo(concours);
    
    // Buttons
    const buttons = createButtonsContainer(concours);
    
    // Assembler la carte
    card.appendChild(header);
    card.appendChild(content);
    card.appendChild(statusInfo);
    card.appendChild(buttons);
    
    return card;
}

function createStatusInfo(concours) {
    const statusRow = document.createElement('div');
    statusRow.className = 'card-status-row';

    const etat = concours.etat || 'A definir';
    const tempsRestant = getTempsRestantDepuisDateFin(concours.dateFin);

    const statusBadge = document.createElement('span');
    statusBadge.className = `status-badge ${getStatusClass(etat)}`;
    statusBadge.textContent = etat;

    const timeInfo = document.createElement('span');
    timeInfo.className = 'status-time';
    timeInfo.innerHTML = `<i class="fas fa-hourglass-half"></i> ${escapeHtml(tempsRestant)}`;

    statusRow.appendChild(statusBadge);
    statusRow.appendChild(timeInfo);

    return statusRow;
}

function getTempsRestantDepuisDateFin(dateFin) {
    if (!dateFin) {
        return 'A definir';
    }

    const dateFinValue = parseDateFin(dateFin);
    if (!dateFinValue) {
        return 'Date invalide';
    }

    const maintenant = new Date();
    const diffMs = dateFinValue.getTime() - maintenant.getTime();

    if (diffMs <= 0) {
        return 'Fini';
    }

    const minuteMs = 60 * 1000;
    const hourMs = 60 * minuteMs;
    const dayMs = 24 * hourMs;

    const jours = Math.floor(diffMs / dayMs);
    const heures = Math.floor((diffMs % dayMs) / hourMs);
    const minutes = Math.floor((diffMs % hourMs) / minuteMs);

    if (jours > 0) {
        return `${jours}j ${heures}h`;
    }

    if (heures > 0) {
        return `${heures}h ${minutes}m`;
    }

    return `${Math.max(1, minutes)}m`;
}

function parseDateFin(dateFin) {
    if (typeof dateFin !== 'string') {
        return null;
    }

    const cleanedDate = dateFin.trim();
    if (!cleanedDate) {
        return null;
    }

    // Supporte "YYYY-MM-DD" et "YYYY-MM-DD HH:mm" en heure locale.
    if (/^\d{4}-\d{2}-\d{2}$/.test(cleanedDate)) {
        return new Date(`${cleanedDate}T23:59:59`);
    }

    if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(cleanedDate)) {
        return new Date(cleanedDate.replace(' ', 'T'));
    }

    const parsedDate = new Date(cleanedDate);
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

function getStatusClass(etat) {
    const normalizedEtat = etat.toLowerCase();

    if (normalizedEtat.includes('fini') || normalizedEtat.includes('terminé')) { return 'status-closed'; }
    if (normalizedEtat.includes('en cours')) { return 'status-open'; }
    return 'status-custom';
}

// ===== FONCTION DE CRÉATION DES BOUTONS =====
function createButtonsContainer(concours) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'card-buttons';
    
    // Bouton Gleam (principal)
    if (concours.LienConcours) {
        const gleamBtn = document.createElement('a');
        gleamBtn.href = concours.LienConcours;
        gleamBtn.target = '_blank';
        gleamBtn.rel = 'noopener noreferrer';
        gleamBtn.className = 'btn btn-gleam';
        gleamBtn.innerHTML = '<i class="fas fa-gift"></i> Participer';
        buttonsContainer.appendChild(gleamBtn);
    }
    
    // Boutons réseaux sociaux
    const socialPlatforms = [
        { key: 'pageweb', icon: 'fas fa-globe', label: 'Page Web' },
        { key: 'twitch', icon: 'fab fa-twitch', label: 'Twitch' },
        { key: 'youtube', icon: 'fab fa-youtube', label: 'YouTube' },
        { key: 'discord', icon: 'fab fa-discord', label: 'Discord' },
        { key: 'instagram', icon: 'fab fa-instagram', label: 'Instagram' },
        { key: 'x', icon: null, label: 'X' },
        { key: 'tiktok', icon: 'fab fa-tiktok', label: 'TikTok' }
    ];
    
    socialPlatforms.forEach(platform => {
        const url = concours.socials[platform.key];
        if (url) {
            const socialBtn = document.createElement('a');
            socialBtn.href = url;
            socialBtn.target = '_blank';
            socialBtn.rel = 'noopener noreferrer';
            socialBtn.className = 'btn btn-social';
            socialBtn.title = platform.label;
            if (platform.key === 'x') {
                socialBtn.innerHTML = getXIconSvg();
            } else {
                socialBtn.innerHTML = `<i class="${platform.icon}"></i>`;
            }
            buttonsContainer.appendChild(socialBtn);
        }
    });
    
    return buttonsContainer;
}

function getXIconSvg() {
    return `
        <svg class="icon-x" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M18.244 2H21.5l-7.11 8.127L22.75 22h-6.55l-5.13-6.7L5.2 22H1.94l7.61-8.7L1.5 2h6.72l4.64 6.12L18.244 2z"></path>
        </svg>
    `;
}

// ===== FONCTION UTILITAIRE : ÉCHAPPER HTML =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    generateConcoursCards();

    // Met a jour le temps restant automatiquement toutes les minutes.
    setInterval(generateConcoursCards, 60 * 1000);
});
