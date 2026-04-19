import styles from "../styles/videos.module.css"

export default function VideoComponent(){
    return (
        <div className={styles.container} id="videos">
            <iframe 
            height="457" 
            src="https://www.youtube.com/embed/j5tkRiFB9D4" 
            title="animação para campanha eleitoral" 
            frameborder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
            loading="lazy" 
            className={styles.video}
            ></iframe>
           <iframe 
           height="457" 
           src="https://www.youtube.com/embed/etUS-d7Gazk" 
           title="Animações campanha Beto" 
           frameborder="0" 
           allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerPolicy="strict-origin-when-cross-origin" 
           allowFullScreen
           loading="lazy" 
           className={styles.video}
           ></iframe>
        </div>
    )
}