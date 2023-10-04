import styles from "./Content.module.css";
export const Content = () => {
  return (
    <div className={styles.container}>
      <h1>Pôster: Star Wars(1977)</h1>
      <p className={styles.paragraph}>
        Descrição Uau Posters Por que é diferente? Oferecemos pôsteres da melhor
        qualidade, realizamos postagens rápidas, temos inúmeras recomendações
        positivas, sua compra estará segura e garantida. Especificações
        Material: Papel fotográfico próprio para decoração
        (Semibrilho/Acetinado) e impressão de alta qualidade e durabilidade
        Embalagem: Entregue enrolado em um tubo resistente para que chegue
        intacto É um bom presente? Pela sua importância na história da
        comunicação mundial e seu valor estético, o pôster é uma peça apreciada
        por todos. Um presente criativo. Dada a variedade de opções, é um
        desafio escolher qual encantará mais o presenteado, provando que você o
        conhece bem.
      </p>
      <button className = {styles.btn}>Comprar agora</button>
    </div>
  );
};
