export default function RecorderUI() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-white rounded-2xl border-2 border-slate-700 p-6">
      <h1 className="text-xl font-bold mb-4">Rsync Recorder</h1>
      <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold transition-all">
        Start Recording
      </button>
    </div>
  );
}