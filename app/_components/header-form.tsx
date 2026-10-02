import Image from "next/image";

const HeaderForm = () => {
    return ( 
        <div className="text-center mb-8 ">
          <div className="flex gap-4 justify-center items-center max-sm:flex-col max-sm:gap-1">
            <Image width={45} height={56} alt="logo lmr" src="/logo-lmr.png" />
            <h1 className="text-2xl max-sm:text-xl font-bold text-slate-900 tracking-tight">
              <span className="text-[#1679c9]">Alves</span> Assessoria e Consultoria
            </h1>
          </div>
          <p className="text-sm font-medium text-slate-600 mt-1">
            Consultoria contábil, financeira, tributária, fiscal, regularizações e muito mais Manaus/AM
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Preencha os campos e descubra como podemos ajudar você.
          </p>
        </div>
     );
}
 
export default HeaderForm;