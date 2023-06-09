import React, { useState, useEffect } from "react";
import { Articles } from "../../Helper/Fetch/api";

export default function ContentNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Articles().then((data) => {
      setArticles(data);
    });
  }, []);

  console.log(articles);

  return (
    <div className="card justify-center gap-10 items-center flex-wrap px-12">
      <h1 className="title text-[25px] font-bold mt-10 text-center">
        Haris Azhar Bantah Minta Saham Freeport ke Luhut, Tegaskan Bantu Masyarakat Adat untuk Pembagian Saham Artikel ini telah tayang di Kompas.com dengan judul "Haris Azhar Bantah Minta Saham Freeport ke Luhut, Tegaskan Bantu Masyarakat
        Adat untuk Pembagian Saham
      </h1>
      <p className="creator items-center justify-center flex mt-3">Penulis : Muhammad Aryo Bimo</p>
      <p className="date items-center justify-center flex ">Date : Sunday, 10 September 2020</p>
      <div className="imgContainer flex items-center justify-center">
        <img className="imgContent mt-5 rounded-lg w-[700px] " src="https://images.unsplash.com/photo-1686072895120-af68fc5abd5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />{" "}
      </div>
      <p className="descNews mt-5">
        Jakarta - Anggota TNI AD, Pratu J (27), diamankan setelah diduga melakukan penusukan terhadap David (23), pengamen gerobak keliling yang ditemukan tewas bersimbah darah di trotoar Senen, Jakarta Pusat. Polisi mengungkap keduanya
        sempat terlibat cekcok sebelum insiden penusukan. Kapolres Metro Jakarta Pusat Kombes Komarudin mengatakan mulanya Pratu J dan rekan-rekannya tengah nongkrong di Kota Tua, Jakarta Barat. Saat itu korban yang merupakan pengamen
        gerobak juga tengah bekerja di sana. Pratu J menyewa sound system yang dibawa korban. "Kelompok ini (Pratu J) 5 sampai 6 orang ini nongkrong di Kota Tua. Korban juga di Kota Tua. Korban yang bawa-bawa salon di jalanan. Pelaku dan
        bersama teman-temannya sedang nongkrong dan korban biasa bawa-bawa musik (sound system) jalan-jalan gitu," kata Komarudin saat dihubungi, Kamis (8/6/2023). Baca artikel detiknews, "Polisi Ungkap Motif Pratu J Tusuk Pengamen, Dipicu
        Uang Sewa Sound System" selengkapnya https://news.detik.com/berita/d-6762542/polisi-ungkap-motif-pratu-j-tusuk-pengamen-dipicu-uang-sewa-sound-system. Download Apps Detikcom Sekarang https://apps.detik.com/detik/
      </p>
    </div>
  );
}
