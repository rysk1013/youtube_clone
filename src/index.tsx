import React from 'react';
import ReactDOM from 'react-dom';
// BrowserRouterをインポート
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from './Route';
// Material-UIの設定類をインポート
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
// Material-UIの「テーマ」を作成する
// Material-UIのテーマ（色など）をカスタマイズする際には、createThemeの引数にカスタマイズ項目を渡す
// 今回は何もカスタマイズしないので、何も指定していない
const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/*  ブラウザの違いを吸収し、どのデバイスでも同じように表示する用のCSSを使用する */}
        <CssBaseline />
        <RootRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
