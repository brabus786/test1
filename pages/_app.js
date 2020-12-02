import  {createWrapper} from 'next-redux-wrapper';
import initStore from '../store';


function MyApp({ Component, pageProps}) {
    return (
            <Component {...pageProps} />
    );
}

export const wrapper = createWrapper(initStore, {debug: true});


export default wrapper.withRedux(MyApp);