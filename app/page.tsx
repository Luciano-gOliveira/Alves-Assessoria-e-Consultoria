import FooterForm from "./_components/footer-form";
import FormularioInscricao from "./_components/formulario-inscricao";
import HeaderForm from "./_components/header-form";

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
        <HeaderForm/>
        <FormularioInscricao/>
        <FooterForm/>
      </div>
    </main>
  );
}
