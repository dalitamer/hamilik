# Hamilik Okulu Kırşehir

Site artık **React (Vite)** uygulaması olarak [`react-app/`](react-app/) altında yaşıyor.
Eski statik HTML sürümü kaldırıldı; son hali git geçmişinde `123c325` commitinde duruyor.

```bash
cd react-app
npm install
npm run dev     # http://localhost:5173
npm run build   # production çıktısı: react-app/dist
```

Ayrıntılar için [react-app/README.md](react-app/README.md).
Render dağıtımı `render.yaml` üzerinden `react-app/dist` klasörünü SPA fallback ile yayınlar.
