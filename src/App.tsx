import FetchAndShow from './fetch-and-show';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div className="flex justify-center items-center p-20 bg-slate-700">
          <h1 className="text-4xl text-white">
            Vite React TypeScript Tailwind Starter
          </h1>
        </div>
        <div className="p-10">
          <FetchAndShow />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
