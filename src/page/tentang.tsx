const Tentang = () => {
    return (
        <div className="hero w-screen min-h-screen bg-blue-950" id="tentang">
  <div className="hero-content flex-col lg:flex-row-reverse border-2 border-white rounded-lg">
    <img
      src="./src/assets/faithpangalengan.jpg"
      className="max-w-sm rounded-lg shadow-md hidden lg:block" />
    <div className="hero-content text-center">
      <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">About me</h1>
      <p className="mb-5 text-white">
      Saya Mochammad Faith Afdhal Santoso, saya seorang junior front-end developer. Hobi saya adalah Futsal, Main game, dan Programming. Saat ini, saya tengah menekuni pendidikan di SMKN 13 Bandung, di mana saya belajar untuk mengembangkan keterampilan dalam bidang teknologi.
      </p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Tentang;

