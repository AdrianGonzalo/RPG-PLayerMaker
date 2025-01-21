const Window = () => {
    return (
        <div className="bg-[var(--color2)] m-20 rounded-xl">
            <div className="flex flex-col items-center mt-20 m-10">
                <p className="mt-6 text-2xl">
                    <span className="text-5xl">
                        Bienvenidos aventureros
                    </span>

                    <br></br>

                En esta aplicación podréis crear a vuestro aventurero favorito eligiendo raza, subraza, clase, subclase y trasfondo.

                También la aplicación os irá guiando con las ventajas o desventajas que tiene cada raza, clase...

                El aventurero por ahora será lv 1, en un futuro se le podrán subir niveles.

                Disfrutad y gracias por confiar en mi &lt;3 :) </p>
                <div className="mb-6 mt-6 w-full bg-[var-(--color)]">
                    <button style={{ color: 'var(--color3)' }}>Forjar a tu Heroe</button>
                </div>
            </div>
        </div>
    )
}

export default Window