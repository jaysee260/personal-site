import { h } from 'preact';

// Ideally, we'd pass in markdown as
// props and use preact-markdown to render
const Bio = () => 
    <article>
        <p>
          Hello, I'm Juan Carlos.
        </p>
        <p>
          I'm a Web Developer and aspiring Software Engineer.
        </p>
        <p>
          I wrote my first program in C++ in early 2012 while attending community college. From February 2017 through August 2017, I attended a full-stack web development coding bootcamp where I learned to program in JavaScript, using an [array] of different web technologies,both front and back end. Since graduating from bootcamp, I've continued furthering my study and practice of programming for the web.
        </p>
        <p>
          At some point in the process, I developed a deep dissatisfaction with how little "technical education" I actually had. One can learn how to program, but, it is my opinion, <strong>knowing how to program is not enough</strong>. It's important knowing how to program WELL, and in order to do so, the ability to think in a way that is guided by clear and sound logic becomes a necessity. In this way, one can design programs with resilient and reliable architectures, whether small or large.
        </p>
        <p>
          This realization led to an interest in Computer Science. So, as of 2018, I'm exploring the possibility of going back to school in order to finish my undergradute degree. In the meantime, I read books on the subject at my own pace and continue to practice programming.
        </p>
        <p>
          I am based in Boston, Massachusetts.
        </p>
    </article>

export default Bio;