import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_each_argument, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, g as claim_space, h as claim_text, f as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, q as set_data_dev, r as query_selector_all, n as noop, u as destroy_each } from './client.f5e6a738.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/presse/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/presse/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (37:0) {#each liens as article}
function create_each_block(ctx) {
	let article;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let p;
	let a;
	let t1_value = /*article*/ ctx[1].commentaire + "";
	let t1;
	let br;
	let t2;
	let span;
	let t3;
	let a_href_value;
	let t4;

	const block = {
		c: function create() {
			article = element("article");
			img = element("img");
			t0 = space();
			p = element("p");
			a = element("a");
			t1 = text(t1_value);
			br = element("br");
			t2 = space();
			span = element("span");
			t3 = text("☞");
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			article = claim_element(nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			img = claim_element(article_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true, target: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			br = claim_element(a_nodes, "BR", {});
			t2 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t3 = claim_text(span_nodes, "☞");
			span_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(article_nodes);
			article_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*article*/ ctx[1].commentaire);
			attr_dev(img, "class", "svelte-gtmipr");
			add_location(img, file, 40, 2, 844);
			add_location(br, file, 41, 65, 980);
			attr_dev(span, "class", "svelte-gtmipr");
			add_location(span, file, 41, 71, 986);
			attr_dev(a, "href", a_href_value = /*article*/ ctx[1].lien);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-gtmipr");
			add_location(a, file, 41, 5, 920);
			attr_dev(p, "class", "svelte-gtmipr");
			add_location(p, file, 41, 2, 917);
			attr_dev(article, "class", "svelte-gtmipr");
			add_location(article, file, 38, 0, 825);
		},
		m: function mount(target, anchor) {
			insert_dev(target, article, anchor);
			append_dev(article, img);
			append_dev(article, t0);
			append_dev(article, p);
			append_dev(p, a);
			append_dev(a, t1);
			append_dev(a, br);
			append_dev(a, t2);
			append_dev(a, span);
			append_dev(span, t3);
			append_dev(article, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*liens*/ 1 && img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*liens*/ 1 && img_alt_value !== (img_alt_value = /*article*/ ctx[1].commentaire)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*liens*/ 1 && t1_value !== (t1_value = /*article*/ ctx[1].commentaire + "")) set_data_dev(t1, t1_value);

			if (dirty & /*liens*/ 1 && a_href_value !== (a_href_value = /*article*/ ctx[1].lien)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(article);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(37:0) {#each liens as article}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let each_value = /*liens*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-j7ddmf\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Presse";
			attr_dev(div, "class", "container svelte-gtmipr");
			add_location(div, file, 35, 0, 775);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*liens, urlpApi*/ 1) {
				each_value = /*liens*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const presseQuery = gql`
      query presse {
        presses(sort:"dateParution:desc"){
            id
            commentaire
            lien
            logoSite{
                url
  	        }
        }
    }
    `;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: presseQuery });
	return { liens: results.data.presses };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Presse", slots, []);
	let { liens } = $$props;
	const writable_props = ["liens"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Presse> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("liens" in $$props) $$invalidate(0, liens = $$props.liens);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		presseQuery,
		preload,
		urlpApi,
		liens
	});

	$$self.$inject_state = $$props => {
		if ("liens" in $$props) $$invalidate(0, liens = $$props.liens);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [liens];
}

class Presse extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { liens: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Presse",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*liens*/ ctx[0] === undefined && !("liens" in props)) {
			console.warn("<Presse> was created without expected prop 'liens'");
		}
	}

	get liens() {
		throw new Error("<Presse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set liens(value) {
		throw new Error("<Presse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Presse;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWFhYTY4ZWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJlc3NlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbiAgXG4gICAgY29uc3QgcHJlc3NlUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBwcmVzc2Uge1xuICAgICAgICBwcmVzc2VzKHNvcnQ6XCJkYXRlUGFydXRpb246ZGVzY1wiKXtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBjb21tZW50YWlyZVxuICAgICAgICAgICAgbGllblxuICAgICAgICAgICAgbG9nb1NpdGV7XG4gICAgICAgICAgICAgICAgdXJsXG4gIFx0ICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYDtcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICB1cmk6IFwiaHR0cHM6Ly93d3cuZ3JsZGZhdXJlLnh5ei9ncmFwaHFsXCIsXG4gICAgICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IHByZXNzZVF1ZXJ5LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBsaWVuczogcmVzdWx0cy5kYXRhLnByZXNzZXMgfTtcbiAgICB9XG4gICAgbGV0IHVybHBBcGkgPSBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXpcIjtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c2NyaXB0PlxuXG4gICAgZXhwb3J0IGxldCBsaWVucztcbiAgPC9zY3JpcHQ+XG4gIDxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+UHJlc3NlPC90aXRsZT5cbiAgPC9zdmVsdGU6aGVhZD5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbnsjZWFjaCBsaWVucyBhcyBhcnRpY2xlfVxuXG48YXJ0aWNsZT5cbiAgICAgIFxuICA8aW1nIHNyYz17dXJscEFwaSArIGFydGljbGUubG9nb1NpdGUudXJsfSBhbHQ9e2FydGljbGUuY29tbWVudGFpcmV9IC8+XG4gIDxwPjxhIGhyZWY9e2FydGljbGUubGllbn0gdGFyZ2V0PVwiX2JsYW5rXCI+e2FydGljbGUuY29tbWVudGFpcmV9PGJyLz4gPHNwYW4+JiM5NzU4Ozwvc3Bhbj48L2E+PC9wPlxuPC9hcnRpY2xlPlxuXG57L2VhY2h9XG48L2Rpdj5cblxuPHN0eWxlPlxuaW1ne1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOjg1cHggMjBweCAwIDIwcHg7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgIH1cbi5jb250YWluZXIgPiBhcnRpY2xlIHtcbiAgICBib3JkZXI6c29saWQgMXB4ICNlZjExYTE7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5pbWd7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2VmMTFhMTtcbn1cbmFydGljbGV7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MDkwO1xufVxucCwgYXtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBjb2xvcjojZmZmO1xufVxuYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbnNwYW46aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgI2VmMTFhMTtcbn1cbnNwYW57XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiMwMDA7XG59XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQXlDNkMsR0FBTyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQURwRCxPQUFPLGVBQUcsR0FBTyxJQUFDLFFBQVEsQ0FBQyxHQUFHO29EQUFPLEdBQU8sSUFBQyxXQUFXOzs7Ozs7a0RBQ3RELEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFEZCxPQUFPLGVBQUcsR0FBTyxJQUFDLFFBQVEsQ0FBQyxHQUFHOzs7OzZFQUFPLEdBQU8sSUFBQyxXQUFXOzs7O21FQUN2QixHQUFPLElBQUMsV0FBVzs7MkVBQWxELEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFMbkIsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFqQ0ksV0FBVyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7ZUFZRCxPQUFPO09BQ3JCLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BRWIsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxXQUFXO1VBRVgsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTzs7O0lBRWxDLE9BQU8sR0FBRywyQkFBMkI7Ozs7O09BSzlCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
