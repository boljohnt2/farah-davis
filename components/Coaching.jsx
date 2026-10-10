export default function Coaching() {
  return (
    <section id="coaching" className="light" aria-labelledby="coaching-title">
      <div className="wrap sec" style={{ paddingBottom: 'var(--s-head)' }}>
        <div className="sechead reveal">
          <h2 id="coaching-title" className="serif h2">
            Where do you want things to change?
          </h2>
          <p className="body">
            Pick the area that feels most urgent. The free 15 minutes will tell
            us if it is the right place to start.
          </p>
        </div>
      </div>
      <div className="panels">
        <article className="panel p1">
          <img
            className="pfull"
            src="/assets/c5448cd4aed04f6d79793e975fb2a867.jpg"
            alt=""
            loading="lazy"
          />
          <span className="pscrim" aria-hidden="true" />
          <span className="pring" aria-hidden="true" />
          <div className="pin">
            <h3 className="serif">Parenting coach</h3>
            <p className="body">
              Raise kids without losing yourself. Practical plans for the
              toddler years, the teenage years and the quiet house after they
              leave.
            </p>
          </div>
        </article>
        <article className="panel p2">
          <img
            className="pfull"
            src="/assets/83f959416ea63f46848636f85d30f878.jpg"
            alt=""
            loading="lazy"
          />
          <span className="pscrim" aria-hidden="true" />
          <span className="pring" aria-hidden="true" />
          <span className="ring" aria-hidden="true" />
          <div className="pin">
            <h3 className="serif">Work-life balance coach</h3>
            <p className="body">
              Stop treating rest like a reward. We map your week, drop what has
              not earned its place and protect what has.
            </p>
          </div>
        </article>
        <article className="panel p3">
          <img
            className="pfull"
            src="/assets/f242224529b21d0cf23e6fb98c975a66.jpg"
            alt=""
            loading="lazy"
          />
          <span className="pscrim" aria-hidden="true" />
          <span className="pring" aria-hidden="true" />
          <span className="half" aria-hidden="true" />
          <span className="dot" aria-hidden="true" />
          <div className="pin">
            <h3 className="serif">Business coach</h3>
            <p className="body">
              Turn the skills you have collected into a business people pay
              for. Your offer, your pricing, your visibility and your first
              clients.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
