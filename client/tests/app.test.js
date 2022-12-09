import renderer from 'react-test-renderer';
import App from '../src/App';

it('Should render <App />', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
