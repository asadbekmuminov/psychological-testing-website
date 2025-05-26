const ResultPage = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    return <p>Foydalanuvchi topilmadi.</p>;
  }

  const { fullName, resultGroup } = currentUser;
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    // Certificate componentini PDFga o‘girish
    const blob = await pdf(<Certificate fullName={fullName} resultGroup={resultGroup} />).toBlob();

    // Blob faylni link orqali yuklab olish
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sertifikat-${fullName}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Natijangiz: {resultGroup}</h2>
      <p className="mb-6 text-lg">Hurmatli {fullName}, siz testni muvaffaqiyatli yakunladingiz!</p>

      <button
        onClick={handleDownload}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? 'Yuklanmoqda...' : 'Sertifikatni yuklab olish'}
      </button>
    </div>
  );
};

export default ResultPage;
