const contactData = {
    Jamal: {
        avatar: 'Jew.webp',
        status: 'online',
        time: '12:45',
        unread: 1,
        responses: [
            "Yakin? yasudah lah aku pinjol aja",
            "Mau gimana lagi gw gak ada duit",
            "Maaf udah ngerepotin bro gw tau yg gw mau lakuin itu salah",
            "Iya bro, nanti kalo udah menang raasain lu",
            "Kalo gw menang, gw traktir lu makan enak, deal?",
            "Gw rungkad bro😭",
            "Duit gw abis bro, gak bisa buat makan besok😭",
        ]
    },
    Umar: {
        avatar: 'india.jpg',
        status: 'online',
        time: '11:30',
        unread: 1,
        responses: [
            "Napa juga jual kuota mahal-mahal tapi bermasalah terus",
            "Sudah bisa belum buka BCA nya?",
            "Kirim bukti pembayaran nya kalau udah selesai ya",
            "Kapan lu mau bayar, cash juga boleh kalu mau ketemuan",
            "Makasih bro udah masuk duitnya!",
            "Lain kali jangan lupa bayar hutang ya!",
        ]
    },
    Adolph: {
        avatar: 'adolph.png',
        status: 'offline',
        time: '10:15',
        unread: 0,
        responses: [
            "Makasih supportnya bro, gw appreciate banget",
            "Gw udah ngirim aplikasi ke sekolah yang lain, mudah-mudahan diterima",
            "Kamu tahu gak ada sekolah seni yang bagus di daerah sini?",
            "Makasih bro udah nemenin, lu yang terbaik deh pokoknya",
            "Lain kali kita mabar yok, gw pengen nenangin diri",
        ]
    },
    toni: {
        avatar: 'toni.jpg',
        status: 'online',
        time: '09:00',
        unread: 1,
        responses: [
            "Kami bisa sekitar jam 10 sampai 17 nanti, kamu pilih jam berapa aja",
            "Mau berapa kamera yang kamu butuhin? Kita bisa diskon kalau ambil lebih dari 2",
            "Mau tf sekarang atau nanti aja? Aku bisa tunggu kok",
            "Kira-kira tinggi pemasangan nya berapa? Aku bisa bawa tangga lebih tinggi juga kalau perlu",
            "Makasih telah membeli",
            "Kalau mau tanya-tanya soal fitur-fitur nya, jangan ragu buat hubungi aku lagi ya!",
        ]
    },
    Wiber: {
        avatar: 'wibert.png',
        status: 'offline',
        time: '08:30',
        unread: 1,
        responses: [
            "Mahal banget pempeknya tapi lumayan sih rasanya",
            "Makasih udah nemenin, lain kali aku traktir lagi ya!",
            "Makasih hadiahnya bro, aku suka banget!",
            "Gak papa kamu gak usah bayar kan aku lagi traktir",
            "Cuko nya mantap banget, aku suka yang pedes-pedes gitu",
            "Lain kali aku traktir tongseng ya, aku tau tempat yang enak banget!",
        ]
    },
    Burhan: {
        avatar: 'umar.png',
        status: 'offline',
        time: '21:26',
        unread: 0,
        responses: [
            "Gila juga mau judol udah tau lagi gak baik ekonominya, tapi yasudah lah ya",
            "Gw sih ngak ngasih duitnya, lu kasih nga",
            "Kata dia kalau menang nanti dia bagi setengah, tapi ya gatau deh bisa dipercaya apa engga",
            "Gw sih gak yakin dia menangnya, tapi ya semoga aja menang biar dia bisa bayar hutangnya sama lu",
            "Oh lu ngak ngasih duitnya juga ya? wkwkwkkwkwk",
            "Semogha aja dia ngak judol lagi, kasian juga kalo dia judol terus-terusan",
        ]
    },
    Faiz: {
        avatar: 'faiz.png',
        status: 'online',
        time: 'Yesterday',
        unread: 0,
        responses: [
            "Gw udah 2 minggu gak main, skill gw under, main gak?",
            "Besok ranked lagi? Kita bisa push bareng sampe immortal",
            "Gila ya, dulu kita sering main bareng, sekarang udah jarang banget, kangen juga sih",
            "Kapan-kapan kita main lagi ya, biar nostalgia",
            "Eh btw, kamu masih inget gak nama hero yang sering aku pake dulu? Aku lupa-lupa inget nih",
            "Makasih ya udah mau main bareng, lain kali kita main lagi ya!",
        ]
    }
};

let messages = {
    Jamal: [
        { text: "Pinjem duit bro mau judol", sender: 'Jamal', time: '12:30', status: 'read' },
        { text: "Gila lu napa lu mau judol", sender: 'user', time: '12:31', status: 'read' },
        { text: "Sini duit lu, nanti kalo menang gw bagi setengah", sender: 'Jamal', time: '12:35', status: 'read' },
    ],
    Umar: [
        { text: "Woi balikin 200 ribu gw tf sekarang!", sender: 'Umar', time: '11:20', status: 'read' },
        { text: "Sabar bro! BCA mobile gw lg ngelag gimana ini telkomsel", sender: 'user', time: '11:25', status: 'read' },
        { text: "Alasan lu! lu udah nagih 1 minggu lebih!", sender: 'Umar', time: '11:30', status: 'read' },
    ],
    Adolph: [
        { text: "Bro gw ditolak sama sekolah seni😭", sender: 'Adolph', time: '10:00', status: 'read' },
        { text: "Santai aja, nanti kita cari yang lain", sender: 'user', time: '10:10', status: 'read' },
        { text: "Gw udah kesel bro di sini gak ada lagi sekolah yang lebih bagus", sender: 'Adolph', time: '10:15', status: 'read' },
        { text: "Santai, ngga mungkin ngga ada yang lebih bagus lagi, pasti ada", sender: 'user', time: '10:17', status: 'read' },
    ],
    toni: [
        { text: "Lu mau ga beli cctv baru gw? bisa diputar balik recording nya, ada fitur night vision juga", sender: 'toni', time: '08:45', status: 'read' },
        { text: "Boleh emang satuan berapa? sekalian masang", sender: 'user', time: '08:55', status: 'read' },
        { text: "150 bro satu nya, mau jam berapa masang nya?", sender: 'toni', time: '09:00', status: 'read' },
    ],
    Wiber: [
        { text: "Jangan lupa masuk besok gw mw traktir sekelas!", sender: 'Wiber', time: '08:10', status: 'read' },
        { text: "Dimana? jam berapa?", sender: 'user', time: '08:20', status: 'read' },
        { text: "Di pempek twin jam 11 nanti ya!", sender: 'Wiber', time: '08:30', status: 'read' },
    ],
    Burhan: [
        { text: "Lu di minta duit sama Jamal juga gak?", sender: 'Burhan', time: '21:22', status: 'read' },
        { text: "Iya, gila dia minta duit buat judol", sender: 'user', time: '21:26', status: 'read' },
    ],
    Faiz: [
        { text: "Bro gas login dota gw lagi mau push nih", sender: 'Faiz', time: 'Yesterday', status: 'read' },
        { text: "Gas gw maen mid gw carry lu", sender: 'user', time: 'Yesterday', status: 'read' },
    ]
};

let currentContact = null;
let emojiPickerOpen = false;
const isMobile = () => window.innerWidth <= 680;

const sidebar          = document.getElementById('sidebar');
const chatArea         = document.getElementById('chatArea');
const contactsList     = document.getElementById('contactsList');
const messagesContainer= document.getElementById('messagesContainer');
const messageInput     = document.getElementById('messageInput');
const sendBtn          = document.getElementById('sendBtn');
const searchInput      = document.getElementById('searchInput');
const searchClearBtn   = document.getElementById('searchClearBtn');
const emojiToggleBtn   = document.getElementById('emojiToggleBtn');
const emojiPicker      = document.getElementById('emojiPicker');
const inputArea        = document.getElementById('inputArea');
const backBtn          = document.getElementById('backBtn');
const chatHeaderInfo   = document.getElementById('chatHeaderInfo');
const profilePanel     = document.getElementById('profilePanel');
const closeProfileBtn  = document.getElementById('closeProfileBtn');

const emojis = [
    '😀','😂','😍','🥰','😎','😭','😅','🤔','😏','🙄',
    '😤','🥺','🤗','😬','🤩','🥳','😴','🤤','😷','🤯',
    '❤️','🧡','💛','💚','💙','💜','🖤','❤️‍🔥','💔','💕',
    '👍','👎','👌','✌️','🤞','🙏','🤝','👏','🤙','💪',
    '🎉','🎊','🔥','⭐','✨','🌟','💫','🎈','🎁','🏆',
    '😂','🤣','😆','😄','😁','😃','🙂','😊','☺️','😇',
    '🐶','🐱','🐼','🐨','🦁','🦊','🐸','🐧','🦋','🌸',
    '🍕','🍔','🍜','🍣','🍰','🎂','🍺','🥂','☕','🧋',
    '⚽','🏀','🎸','🎵','🎮','📚','💻','📱','🌍','🚀',
    '👋','🤚','🖐️','✋','🤟','🤘','🤙','👈','👉','☝️',
];

function init() {
    buildEmojiPicker();
    renderContacts(Object.keys(contactData));
    setupEvents();
    setupSidebarMenu();
    setupBiodataModal();
}

function buildEmojiPicker() {
    emojis.forEach(e => {
        const span = document.createElement('span');
        span.className = 'emoji-item';
        span.textContent = e;
        span.addEventListener('click', () => {
            messageInput.value += e;
            messageInput.focus();
        });
        emojiPicker.appendChild(span);
    });
}

function renderContacts(keys) {
    contactsList.innerHTML = '';
    if (keys.length === 0) {
        contactsList.innerHTML = '<div class="no-results">No contacts found</div>';
        return;
    }

    keys.forEach(name => {
        const d = contactData[name];
        const el = document.createElement('div');
        el.className = 'contact' + (name === currentContact ? ' active' : '');
        el.dataset.contact = name;

        const msgs = messages[name] || [];
        const lastMsg = msgs.length ? msgs[msgs.length - 1] : null;
        const preview = lastMsg ? lastMsg.text : d.preview;

        const avatarContent = d.avatar ? `<img src="${d.avatar}" alt="${name}" draggable="true">` : d.initial;
        const avatarStyle = d.avatar ? '' : `background:${d.color}`;
        el.innerHTML = `
            <div class="contact-avatar" style="${avatarStyle}" data-avatar="${name}">
                ${avatarContent}
            </div>
            <div class="contact-info">
                <div class="contact-name">${name}</div>
                <div class="contact-preview">${escapeHtml(preview)}</div>
            </div>
            <div class="contact-meta">
                <div class="contact-time">${d.time}</div>
                ${d.unread > 0 ? `<div class="unread-badge">${d.unread}</div>` : ''}
            </div>
        `;

        el.addEventListener('click', () => switchContact(name));
        el.querySelector('.contact-avatar').addEventListener('click', (ev) => {
            ev.stopPropagation();
            switchContact(name);
        });

        contactsList.appendChild(el);
    });
}

function switchContact(name) {
    currentContact = name;

    document.querySelectorAll('.contact').forEach(c => c.classList.remove('active'));
    const activeEl = document.querySelector(`.contact[data-contact="${name}"]`);
    if (activeEl) activeEl.classList.add('active');

    contactData[name].unread = 0;
    if (activeEl) {
        const badge = activeEl.querySelector('.unread-badge');
        if (badge) badge.remove();
    }

    const d = contactData[name];
    const chatAvatar = document.getElementById('chatAvatar');
    if (d.avatar) {
        chatAvatar.innerHTML = `<img src="${d.avatar}" alt="${name}" draggable="true">`;
        chatAvatar.style.background = '';
    } else {
        chatAvatar.textContent = d.initial;
        chatAvatar.style.background = d.color;
    }
    document.getElementById('chatName').textContent = name;
    const statusEl = document.getElementById('chatStatus');
    statusEl.textContent = d.status === 'online' ? 'Online' : 'Offline';
    statusEl.style.color = d.status === 'online' ? 'var(--online)' : 'var(--text-muted)';

    inputArea.style.display = 'flex';

    loadMessages(name);

    profilePanel.classList.remove('open');

    if (isMobile()) {
        sidebar.classList.add('slide-out');
        chatArea.classList.add('slide-in');
    }
}

function loadMessages(name) {
    messagesContainer.innerHTML = '';

    const msgs = messages[name] || [];
    if (msgs.length === 0) {
        const div = document.createElement('div');
        div.className = 'date-divider';
        div.innerHTML = `<span>Today</span>`;
        messagesContainer.appendChild(div);
    } else {
        let lastDate = null;
        msgs.forEach(msg => {
            const dateLabel = msg.time.includes(':') ? 'Today' : msg.time;
            if (dateLabel !== lastDate) {
                const divider = document.createElement('div');
                divider.className = 'date-divider';
                divider.innerHTML = `<span>${dateLabel}</span>`;
                messagesContainer.appendChild(divider);
                lastDate = dateLabel;
            }
            renderMessage(msg, false);
        });
    }

    scrollToBottom();
}

function renderMessage(msg, animate = true) {
    const isOut = msg.sender === 'user';
    const group = document.createElement('div');
    group.className = `message-group ${isOut ? 'sent' : 'received'}`;
    if (!animate) group.style.animation = 'none';

    const bubble = document.createElement('div');
    bubble.className = `message ${isOut ? 'sent' : 'received'}`;

    bubble.innerHTML = `
        <div class="message-text">
            <div class="message-content">${escapeHtml(msg.text)}</div>
        </div>
        <div class="message-footer">
            <span class="message-time">${msg.time}</span>
            ${isOut ? `<div class="message-status">
                <span class="checkmark ${msg.status === 'read' ? 'read' : ''}">✓</span>
                <span class="checkmark ${msg.status === 'read' ? 'read' : ''}">✓</span>
            </div>` : ''}
        </div>
    `;

    group.appendChild(bubble);
    messagesContainer.appendChild(group);
}

function sendMessage() {
    const text = messageInput.value.trim();
    if (!text || !currentContact) return;

    const now = getTime();
    const msg = { text, sender: 'user', time: now, status: 'sent' };

    if (!messages[currentContact]) messages[currentContact] = [];
    messages[currentContact].push(msg);

    renderMessage(msg, true);
    updateContactPreview(currentContact, text, now);
    messageInput.value = '';
    scrollToBottom();

    setTimeout(() => markLastRead(), 600);

    setTimeout(() => {
        showTyping();
        const delay = 1200 + Math.random() * 1400;
        setTimeout(() => {
            removeTyping();
            const replyText = getAutoResponse(currentContact);
            const replyMsg = { text: replyText, sender: currentContact, time: getTime(), status: 'read' };
            messages[currentContact].push(replyMsg);
            renderMessage(replyMsg, true);
            updateContactPreview(currentContact, replyText, replyMsg.time);
            scrollToBottom();
        }, delay);
    }, 1000);

    if (emojiPickerOpen) toggleEmojiPicker();
}

function showTyping() {
    const el = document.createElement('div');
    el.className = 'message-group received';
    el.id = 'typingIndicator';
    el.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    messagesContainer.appendChild(el);
    scrollToBottom();
}

function removeTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
}

function getAutoResponse(name) {
    const r = contactData[name].responses;
    return r[Math.floor(Math.random() * r.length)];
}

function getTime() {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
}

function scrollToBottom() {
    setTimeout(() => { messagesContainer.scrollTop = messagesContainer.scrollHeight; }, 20);
}

function markLastRead() {
    const all = messagesContainer.querySelectorAll('.message.sent');
    if (!all.length) return;
    all[all.length - 1].querySelectorAll('.checkmark').forEach(c => c.classList.add('read'));
}

function updateContactPreview(name, text, time) {
    const el = document.querySelector(`.contact[data-contact="${name}"] .contact-preview`);
    if (el) el.textContent = text;
    const timeEl = document.querySelector(`.contact[data-contact="${name}"] .contact-time`);
    if (timeEl) timeEl.textContent = time;
}

function toggleEmojiPicker() {
    emojiPickerOpen = !emojiPickerOpen;
    emojiPicker.classList.toggle('open', emojiPickerOpen);
}

function openProfile() {
    if (!currentContact) return;
    const d = contactData[currentContact];

    const profileAvatar = document.getElementById('profileAvatar');
    if (d.avatar) {
        profileAvatar.innerHTML = `<img src="${d.avatar}" alt="${currentContact}" draggable="true">`;
        profileAvatar.style.background = '';
    } else {
        profileAvatar.textContent = d.initial;
        profileAvatar.style.background = d.color;
    }
    document.getElementById('profileName').textContent = currentContact;
    document.getElementById('profilePhone').textContent = d.phone;
    document.getElementById('profileOnline').textContent = d.status === 'online' ? 'Online' : 'Offline';
    document.getElementById('profileOnline').style.color = d.status === 'online' ? 'var(--online)' : 'var(--text-muted)';
    document.getElementById('profileUsername').textContent = d.username;
    document.getElementById('profileBio').textContent = d.bio;
    document.getElementById('profileLocation').textContent = d.location;
    document.getElementById('profileJoined').textContent = d.joined;
    document.getElementById('profileMedia').textContent = d.media;

    const tagsEl = document.getElementById('profileTags');
    tagsEl.innerHTML = '';
    d.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'profile-tag';
        span.textContent = tag;
        tagsEl.appendChild(span);
    });

    profilePanel.classList.add('open');
}

function handleSearch() {
    const q = searchInput.value.trim().toLowerCase();
    searchClearBtn.classList.toggle('visible', q.length > 0);
    const filtered = Object.keys(contactData).filter(name =>
        name.toLowerCase().includes(q) ||
        (contactData[name].preview || '').toLowerCase().includes(q)
    );
    renderContacts(filtered);
}

function setupEvents() {
    sendBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });

    searchInput.addEventListener('input', handleSearch);
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchClearBtn.classList.remove('visible');
        renderContacts(Object.keys(contactData));
    });

    emojiToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleEmojiPicker();
    });

    document.addEventListener('click', (e) => {
        if (emojiPickerOpen && !emojiPicker.contains(e.target) && e.target !== emojiToggleBtn) {
            toggleEmojiPicker();
        }
    });

    closeProfileBtn.addEventListener('click', () => profilePanel.classList.remove('open'));

    backBtn.addEventListener('click', () => {
        profilePanel.classList.remove('open');
        if (isMobile()) {
            chatArea.classList.remove('slide-in');
            sidebar.classList.remove('slide-out');
        }
    });

    messageInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });

    window.addEventListener('resize', () => {
        if (!isMobile()) {
            sidebar.classList.remove('slide-out');
            chatArea.classList.remove('slide-in');
        }
    });
}

let myProfile = {
    name: 'You',
    username: '@me',
    phone: '+1 000 000 0000',
    bio: 'Hey there! I am using WhatsApp.',
    location: 'Somewhere on Earth 🌍',
};

function setupSidebarMenu() {
    const menuBtn   = document.getElementById('menuis');
    const dropdown  = document.getElementById('sidebarDropdown');
    const themeItem = document.getElementById('themeToggleItem');

    let dropOpen = false;

    function openDrop() { dropdown.classList.add('open'); dropOpen = true; }
    function closeDrop() { dropdown.classList.remove('open'); dropOpen = false; }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropOpen ? closeDrop() : openDrop();
    });

    document.addEventListener('click', (e) => {
        if (dropOpen && !dropdown.contains(e.target)) closeDrop();
    });

    let lightMode = false;
    const themeLabel = document.getElementById('themeLabel');

    themeItem.addEventListener('click', () => {
        lightMode = !lightMode;
        document.body.classList.toggle('light', lightMode);
        themeLabel.textContent = lightMode ? 'Dark mode' : 'Light mode';
        closeDrop();
    });
}

function openBiodataModal() {
    document.getElementById('bioName').value     = myProfile.name;
    document.getElementById('bioUsername').value = myProfile.username;
    document.getElementById('bioPhone').value    = myProfile.phone;
    document.getElementById('bioBio').value      = myProfile.bio;
    document.getElementById('bioLocation').value = myProfile.location;
    document.getElementById('biodataModal').classList.add('open');
}

function closeBiodataModal() {
    document.getElementById('biodataModal').classList.remove('open');
}

function saveBiodata() {
    myProfile.name     = document.getElementById('bioName').value.trim()     || myProfile.name;
    myProfile.username = document.getElementById('bioUsername').value.trim() || myProfile.username;
    myProfile.phone    = document.getElementById('bioPhone').value.trim()    || myProfile.phone;
    myProfile.bio      = document.getElementById('bioBio').value.trim()      || myProfile.bio;
    myProfile.location = document.getElementById('bioLocation').value.trim() || myProfile.location;
    closeBiodataModal();
    showToast('✅ Biodata berhasil diperbarui!');
}

function setupBiodataModal() {
    document.getElementById('modalClose').addEventListener('click', closeBiodataModal);
    document.getElementById('modalCancelBtn').addEventListener('click', closeBiodataModal);
    document.getElementById('modalSaveBtn').addEventListener('click', saveBiodata);
    document.getElementById('biodataModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('biodataModal')) closeBiodataModal();
    });
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2800);
}

init();
