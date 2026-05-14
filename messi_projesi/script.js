const veriler = [
    { takim: "FC Barcelona", yil: "2004-2021", gol: 672, asist: 303 },
    { takim: "Arjantin", yil: "2005-Aktif", gol: 106, asist: 56 },
    { takim: "Inter Miami", yil: "2023-Aktif", gol: 35, asist: 20 },
    { takim: "Paris Saint-Germain", yil: "2021-2023", gol: 32, asist: 35 }
];

const detaylar = {
    'dunya-kupasi': {
        baslik: "Sonsuz Zafer ve Gözyaşları",
        icerik: "Messi için bu yolculuk hiç kolay olmadı. 2014 Dünya Kupası finalinde Almanya'ya karşı uzatmalarda (1-0) kaybedilen o acı maçın ardından tam 8 yıl bekledi. Sonunda 2022 Katar'da, Fransa'ya karşı (3-3 biten ve penaltılarla kazanılan) efsane finalde 2 gol atarak tarihin en büyüğü olduğunu kanıtladı ve eksik olan tek kupayı müzesine koydu."
    },
    'ballon-dor': {
        baslik: "8 ballon d'Or: Erişilemez Rekor",
        icerik: "Futbol tarihinde bu ödülü 8 kez kazanan başka hiçbir oyuncu yok. Messi; 2009, 2010, 2011, 2012, 2015, 2019, 2021 ve son olarak 2023 yıllarında dünyanın en iyisi seçildi. Özellikle 2012 yılında attığı 91 golle bir takvim yılında en çok gol atan oyuncu olarak tarihe geçti."
    },
    'ucl': {
        baslik: "Şampiyonlar Ligi'nin Efendisi",
        icerik: "Messi, Barcelona ile tam 4 kez bu kupayı kaldırdı. İşte o unutulmaz finaller: <br>• 2006 (Arsenal 2-1) <br>• 2009 (Man United 2-0 - Messi kafa golü attı) <br>• 2011 (Man United 3-1 - Messi uzaktan gol attı) <br>• 2015 (Juventus 3-1). <br>Kariyeri boyunca bu turnuvada 129 gol atarak imkansızı başardı."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const govde = document.getElementById('tabloGövdesi');
    veriler.forEach(item => {
        govde.innerHTML += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1)">
                <td class="p-4 fw-bold text-info">${item.takim}</td>
                <td class="p-4 text-light">${item.yil}</td>
                <td class="p-4 text-center text-warning fw-bold fs-5">${item.gol}</td>
                <td class="p-4 text-center text-info fw-bold fs-5">${item.asist}</td>
            </tr>
        `;
    });
});

function detayGoster(id) {
    const myModal = new bootstrap.Modal(document.getElementById('basariModal'));
    document.getElementById('modalBaslik').innerHTML = detaylar[id].baslik;
    document.getElementById('modalIcerik').innerHTML = detaylar[id].icerik;
    myModal.show();
}