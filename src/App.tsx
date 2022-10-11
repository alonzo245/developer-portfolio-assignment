import { FC } from 'react';
import { GlobalStateProvider, useGlobalState } from './context/useGlobalState';
import { ThemeStateProvider } from './context/useThemeState';
import IndexRouter from './routes';

const App: FC = () => {
    const {} = useGlobalState();
    return (
        <ThemeStateProvider>
            <GlobalStateProvider>
                <IndexRouter />
            </GlobalStateProvider>
        </ThemeStateProvider>
    );
};

export default App;
