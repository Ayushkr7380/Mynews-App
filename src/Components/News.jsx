import  { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes  from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {

    api_key = 'sBNBesRxy3My6F8wnwrZVH3IopFu30BNy88bhfYK'

    static defaultProps = {
        country : 'in',
        category : 'entertainment'
    }

    static propTypes = {
        country : PropTypes.string,
        category: PropTypes.string
    }


    constructor(){
        super()
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            found : 0
        }
    }

    fetchfunction = async()=>{
        // this.props.setprogress(0)
        this.props.setprogress(0)
        let url = `https://api.thenewsapi.com/v1/news/top?locale=${this.props.country}&categories=${this.props.category}&api_token=${this.api_key}&page=${this.state.page}`
        // this.setState({
            //     loading : true
            // })
            
            let data = await fetch(url);
            this.props.setprogress(20)
            
            let d = await data.json();
            console.log(d)
            
            this.props.setprogress(50)
            this.setState({
                articles : d.data,
                found : d.found,
                loading : false
            })
            this.props.setprogress(100)
    }

    async componentDidMount(){   
         
        await this.fetchfunction()    
    }
    // previousClick =async()=>{
    //     await this.setState({
    //         page : this.state.page - 1
    //     })
    //     await this.fetchfunction()
    // }

    // nextClick = async()=>{
    //     await this.setState({
    //         page : this.state.page + 1
    //     })
    //     await this.fetchfunction()    
    // }

    fetchMoreData = async()=>{
        let url = `https://api.thenewsapi.com/v1/news/top?locale=${this.props.country}&categories=${this.props.category}&api_token=${this.api_key}&page=${this.state.page + 1}`
        // this.setState({
            //     loading : true
            // })
            
            let data = await fetch(url);
            
            let d = await data.json();
            
            
            
            this.setState({
                articles :this.state.articles.concat(d.data),
                found : d.found,
                loading : false
            })
             
            this.setState({
                page : this.state.page + 1
            })
        

    }

  render() {
    return (
        <>
      
        <h1 className='text-center ' style={{marginTop : '80px'}}>News for you - Top {this.props.category} Headlines</h1>

        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
            next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.found}
          loader={<Spinner/>}
        >
        <div className='container my-3' >
        <div className="row" >
            {this.state.articles.map((e,index)=>{
                return( 
                    <div className="col" key={index} style={{display : 'flex',justifyContent : 'center'}}>
                    {e && e.title && e.description && e.image_url && e.url && e.published_at && e.source && (
                        <NewsItems
                            title={e.title}
                            description={e.description}
                            img={e.image_url}
                            newsurl={e.url}
                            time={e.published_at}
                            source={e.source}
                        />
                    )}
                </div>
                )
            })}

        </div>
        </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousClick}> &larr; Previous</button>
            <button  disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))}  type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
        </div> */}
        </>
      
    )
  }
}
