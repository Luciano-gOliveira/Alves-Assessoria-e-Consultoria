"use client";

import { mascaraCelular, mascaraCNPJ, mascaraCPF } from "@/utils/mascaras";
import React, { useState } from "react";

const FormularioInscricao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    cnpj: "",
    celular: "",
    email: "",
  });

  const [servicos, setServicos] = useState({
    cursos: true,
    palestras: false,
    creditoOrientado: false,
    outros: false,
  });

  // Manipulador genérico que aplica a máscara dependendo do campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let valorFormatado = value;

    if (name === "cpf") {
      valorFormatado = mascaraCPF(value);
    } else if (name === "cnpj") {
      valorFormatado = mascaraCNPJ(value);
    } else if (name === "celular") {
      valorFormatado = mascaraCelular(value);
    }

    setFormData((prev) => ({ ...prev, [name]: valorFormatado }));
  };

  const handleCheckboxChange = (serviceKey: keyof typeof servicos) => {
    setServicos((prev) => ({ ...prev, [serviceKey]: !prev[serviceKey] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nome ||
      !formData.cpf ||
      !formData.celular ||
      !formData.email
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const interessesSelecionados = [];
    if (servicos.cursos) interessesSelecionados.push("Cursos");
    if (servicos.palestras) interessesSelecionados.push("Palestras");
    if (servicos.creditoOrientado)
      interessesSelecionados.push("Crédito Orientado");
    if (servicos.outros) interessesSelecionados.push("Outros");

    const interesseTexto =
      interessesSelecionados.length > 0
        ? interessesSelecionados.join(", ")
        : "Nenhum especificado";

    const mensagem = `Olá! Quero me inscrever.
*Nome:* ${formData.nome}
*CPF:* ${formData.cpf}
*Celular:* ${formData.celular}
*E-mail:* ${formData.email}
*CNPJ:* ${formData.cnpj || "Não informado"}
*Interesse:* ${interesseTexto}`;

    const numeroWhatsApp = "559288113878";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
          required
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            CPF <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="000.000.000-00"
            maxLength={14}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            CNPJ <span className="text-slate-400 font-normal">(opcional)</span>
          </label>
          <input
            type="text"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            placeholder="00.000.000/0000-00"
            maxLength={18}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Celular / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            placeholder="(92) 99999-9999"
            maxLength={15}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Serviços de interesse:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div
            onClick={() => handleCheckboxChange("cursos")}
            className={`cursor-pointer border rounded-xl p-3 flex items-center space-x-3 transition-all ${
              servicos.cursos
                ? "border-blue-600 bg-blue-50/40 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <input
              type="checkbox"
              checked={servicos.cursos}
              onChange={() => {}}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-slate-800">Cursos</span>
          </div>

          <div
            onClick={() => handleCheckboxChange("palestras")}
            className={`cursor-pointer border rounded-xl p-3 flex items-center space-x-3 transition-all ${
              servicos.palestras
                ? "border-blue-600 bg-blue-50/40 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <input
              type="checkbox"
              checked={servicos.palestras}
              onChange={() => {}}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-slate-800">
              Palestras
            </span>
          </div>

          <div
            onClick={() => handleCheckboxChange("creditoOrientado")}
            className={`cursor-pointer border rounded-xl p-3 flex items-center space-x-3 transition-all ${
              servicos.creditoOrientado
                ? "border-blue-600 bg-blue-50/40 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <input
              type="checkbox"
              checked={servicos.creditoOrientado}
              onChange={() => {}}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-slate-800 leading-tight">
              Crédito Orientado
            </span>
          </div>

          <div
            onClick={() => handleCheckboxChange("outros")}
            className={`cursor-pointer border rounded-xl p-3 flex items-center space-x-3 transition-all ${
              servicos.outros
                ? "border-blue-600 bg-blue-50/40 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <input
              type="checkbox"
              checked={servicos.outros}
              onChange={() => {}}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-slate-800 leading-tight">
              Outros
            </span>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-[#1c81d4] hover:bg-[#1679c9] text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/10 flex items-center justify-center space-x-2 text-sm"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>Enviar inscrição</span>
        </button>
      </div>
    </form>
  );
};

export default FormularioInscricao;
