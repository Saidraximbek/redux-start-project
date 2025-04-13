import React from 'react'

const About = () => {
    return (
        <div className="main-container mt-3 px-6 py-12 bg-white rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-10 text-center text-purple-700">
            💜 Biz haqimizda
          </h1>
    
          <p className="text-lg text-gray-800 mb-8 leading-relaxed text-center">
            <span className="font-semibold text-purple-600">Scent Haven</span> — bu nafislik, go‘zallik va o‘ziga xoslikni
            ifodalovchi original parfumlar manzili. Biz ishonamizki, atir bu — shunchaki hid emas, bu — xotira,
            holat va siz haqingizda gapiruvchi hikoya.
          </p>
    
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">🌸 Biz kimmiz?</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Biz dunyo miqyosida mashhur brendlar va noyob parfumlarni siz uchun yig‘ganmiz. Qattiq xaraktermi yoki
                nozik romantik ruhmi — har bir inson o‘z uslubiga mos atir topa oladi.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">🌿 Nega aynan biz?</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
                <li>✅ 100% original mahsulotlar</li>
                <li>✅ Yaxshi tanlab olingan kolleksiyalar</li>
                <li>✅ O‘rtacha va adolatli narxlar</li>
                <li>✅ Do‘stona va tezkor xizmat</li>
                <li>✅ Tez va xavfsiz yetkazib berish</li>
              </ul>
            </div>
    
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">🧴 Bizning maqsadimiz</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Sizga eng yaxshi atirlarni yetkazish va sizni o‘zingizga xos hid bilan tanitish.
              </p>
            </div>
          </div>
        </div>
      );
}

export default About