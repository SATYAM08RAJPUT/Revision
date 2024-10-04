import ContentCom from "../Content/content";
import Header from "../Header/header";

export default function Home({setSearch,serach}){
        return(
            <>
            <Header serach={serach} setSearch={setSearch}/>
            <ContentCom />
            </>
        )
}