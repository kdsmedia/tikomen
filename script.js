// Daftar komentar yang akan dikirim
const comments = [
    "Sukses selalu!",
    "Keren!",
    "Assalamualaikum, salam support!",
    "Support selalu!",
    "Keren FYP!",
    "Salam santun!",
    "Salam kenal!",
    "Jangan lupa mampir di VT aku!",
    "Boleh kenalan gak?",
    "Keren abisss!",
    "Mantappp,,,",
    "Sukses selalu,,,",
    "Keren banget,,,",
    "Jelas FYP nih!",
    "Pasti FYP!",
    "Salam FYP!",
    "Ayo saling berteman!",
    "Jangan lupa follow aku ya!",
    "Salam!",
    "Keren, semoga sukses!",
    "FYP nih, semangat terus!",
    "Bagus sekali, keren!",
    "Mantap! FYP, ya!",
    "Semangat terus, ya!",
    "Jangan lupa follow ya!",
    "Komentar keren!",
    "Sukses selalu, semangat!",
    "FYP pasti, keren banget!",
    "Bisa jadi viral nih!",
    "Bagus banget video ini!",
    "Keren abis, semoga sukses!",
    "Keren, jangan lupa mampir ke akun aku!",
    "Salam sukses selalu!",
    "Bagus, terus semangat!",
    "Keren! Semoga jadi FYP!",
    "Mantap, jangan lupa follow!",
    "Sukses terus, video ini keren!",
    "Bagus sekali, semoga viral!",
    "Keren! FYP pasti!",
    "Semangat terus, ya!",
    "Jangan lupa mampir di akun aku!",
    "FYP, semangat terus!",
    "Keren banget! Follow aku ya!",
    "Mantap, semoga jadi viral!",
    "Komentar keren, semoga FYP!",
    "Jangan lupa follow untuk update!",
    "Salam sukses, terus semangat!",
    "Semoga video ini FYP!",
    "Bagus banget, semangat terus!",
    "Keren! Jangan lupa follow aku!",
    "Salam kenal dan semangat!",
    "FYP nih! Semoga sukses terus!",
    "Jangan lupa mampir ke akun aku!",
    "Keren, terus semangat ya!",
    "Bagus banget, follow ya!"
];

// Daftar fake akun
const fakeAccounts = [];
for (let i = 1; i <= 50; i++) {
    fakeAccounts.push(`user${i}`);
}

document.getElementById('tiktok-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoUrl = document.getElementById('video-url').value;
    const statusMessage = document.getElementById('status-message');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const totalComments = fakeAccounts.length;
    let commentsSent = 0;

    // Mengatur progress bar dan persentase awal
    statusMessage.textContent = 'Mengirim komentar, mohon tunggu...';
    progressBar.style.width = '0%';
    progressPercentage.textContent = '0%';

    // Fungsi untuk mengirim komentar dan mengupdate progress
    const sendComment = (account, comment) => {
        // Mengirim komentar ke TikTok
        console.log(`Akun: ${account}, Komentar: ${comment}, Video: ${videoUrl}`);
        // Simulasi delay untuk pengiriman komentar
        return new Promise(resolve => setTimeout(resolve, 1200)); // 1.2 detik per komentar
    };

    const sendComments = async () => {
        for (const account of fakeAccounts) {
            const comment = comments[Math.floor(Math.random() * comments.length)];
            await sendComment(account, comment);
            commentsSent++;
            const progress = (commentsSent / totalComments) * 100;
            progressBar.style.width = `${progress}%`;
            progressPercentage.textContent = `${Math.round(progress)}%`;

            // Menunggu 1 detik sebelum melanjutkan komentar berikutnya
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        statusMessage.textContent = 'Semua komentar telah dikirim!';
    };

    // Mulai pengiriman komentar
    sendComments();
});
