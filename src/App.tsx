import { useState, useEffect } from 'react';

interface Store {
  id: number;
  nome: string;
  [key: string]: unknown;
}

function App() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/stores')
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao carregar dados');
        return res.json();
      })
      .then((data) => {
        setStores(data.stores || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600">Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-red-600">Erro: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          STZ - Áreas Consolidadas
        </h1>
        <p className="text-slate-600 mb-8">
          Sistema de engenharia e manutenção
        </p>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Unidades ({stores.length})
          </h2>
          {stores.length === 0 ? (
            <p className="text-slate-500">Nenhuma unidade encontrada.</p>
          ) : (
            <ul className="space-y-2">
              {stores.map((store) => (
                <li key={store.id} className="text-slate-700">
                  {store.nome}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
