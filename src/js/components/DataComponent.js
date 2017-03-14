import { firebaseHandler } from "../firebaseHandler";

const DataComponent = (ComposedComponent) => // fetch callback
    class DataComponent extends React.Component {

      constructor(props) {
        super(props)
        this.firebaseInstance = new firebaseHandler();
        this.state = {
          data: [],
          loading: false,
          loaded: false
        }
      }

      componentWillMount() {
        this.setState({loading: true})
        this.firebaseInstance.init().then(

          (data) => this.setState({
            loaded: true,
            loading: false,
            data
          }),

          (error) => {
            // Promise was rejected
            console.error(error);
            this.setState({
              loading: false,
              error});
          }
        );

      }

      render() {
        const {loader} = this.props;
        return (
                <div className="data-component">
                    {(this.state.loading) ?
                        <div className="loader text-center">
                          <img src={ loader } alt="loader" />
                        </div> :
                        (this.state.error) ?
                        <p> Error Loading Menu Items</p> :
                        <ComposedComponent {...this.state}
                                           {...this.props} />}
                </div>
        )
      }
    }

export default DataComponent;
