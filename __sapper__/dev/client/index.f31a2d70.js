import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, p as empty, q as query_selector_all, c as claim_element, f as detach_dev, g as claim_space, h as attr_dev, j as add_location, l as append_dev, k as insert_dev, n as noop, r as validate_each_argument, t as text, b as children, m as claim_text, u as null_to_empty, w as set_data_dev, x as destroy_each } from './client.63706626.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/collectif/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/collectif/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (57:2) {:else}
function create_else_block(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("FUCK");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "FUCK");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "test svelte-1f7wp66");
			add_location(div, file, 57, 2, 1272);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(57:2) {:else}",
		ctx
	});

	return block;
}

// (38:2) {#if posts}
function create_if_block(ctx) {
	let div;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "content svelte-1f7wp66");
			add_location(div, file, 38, 2, 875);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*urlpApi, posts*/ 1) {
				each_value = /*posts*/ ctx[0];
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
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(38:2) {#if posts}",
		ctx
	});

	return block;
}

// (40:2) {#each posts as post, i}
function create_each_block(ctx) {
	let div;
	let article;
	let h2;
	let t0_value = /*post*/ ctx[1].nom + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*post*/ ctx[1].description + "";
	let t2;
	let t3;
	let aside;
	let img;
	let img_src_value;
	let img_alt_value;
	let t4;

	const block = {
		c: function create() {
			div = element("div");
			article = element("article");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			t3 = space();
			aside = element("aside");
			img = element("img");
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			article = claim_element(div_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			h2 = claim_element(article_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);
			aside = claim_element(div_nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			img = claim_element(aside_nodes, "IMG", { src: true, alt: true, class: true });
			aside_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-1f7wp66");
			add_location(h2, file, 42, 8, 997);
			attr_dev(p, "class", "svelte-1f7wp66");
			add_location(p, file, 43, 8, 1025);
			attr_dev(article, "class", "svelte-1f7wp66");
			add_location(article, file, 41, 6, 979);
			if (img.src !== (img_src_value = urlpApi + /*post*/ ctx[1].profilimage.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "portrait de " + /*post*/ ctx[1].nom);
			attr_dev(img, "class", "svelte-1f7wp66");
			add_location(img, file, 48, 8, 1110);
			attr_dev(aside, "class", "svelte-1f7wp66");
			add_location(aside, file, 47, 6, 1094);
			attr_dev(div, "class", "" + (null_to_empty(/*i*/ ctx[3] % 2 == 0 ? "impair" : "pair") + " svelte-1f7wp66"));
			add_location(div, file, 40, 4, 928);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, article);
			append_dev(article, h2);
			append_dev(h2, t0);
			append_dev(article, t1);
			append_dev(article, p);
			append_dev(p, t2);
			append_dev(div, t3);
			append_dev(div, aside);
			append_dev(aside, img);
			append_dev(div, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[1].nom + "")) set_data_dev(t0, t0_value);
			if (dirty & /*posts*/ 1 && t2_value !== (t2_value = /*post*/ ctx[1].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = urlpApi + /*post*/ ctx[1].profilimage.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = "portrait de " + /*post*/ ctx[1].nom)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(40:2) {#each posts as post, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let link;
	let t;
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*posts*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			link = element("link");
			t = space();
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ysmkuu\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Le collectif";
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://use.typekit.net/ixn1cjn.css");
			add_location(link, file, 35, 4, 773);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link);
			insert_dev(target, t, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(link);
			if (detaching) detach_dev(t);
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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

const membreQuery = gql`
      query membre {
        collectifs(sort: "id:asc") {
          id
          nom
          description
          profilimage {
            url
          }
        }
      }
    `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: membreQuery });
	return { posts: results.data.collectifs };
}

let urlpApi = "https://grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Collectif", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Collectif> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		membreQuery,
		preload,
		urlpApi,
		posts
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts];
}

class Collectif extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Collectif",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Collectif> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Collectif>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Collectif>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Collectif;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjMxYTJkNzAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29sbGVjdGlmL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbiAgXG4gICAgY29uc3QgbWVtYnJlUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBtZW1icmUge1xuICAgICAgICBjb2xsZWN0aWZzKHNvcnQ6IFwiaWQ6YXNjXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5vbVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJvZmlsaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG5cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBtZW1icmVRdWVyeSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgcG9zdHM6IHJlc3VsdHMuZGF0YS5jb2xsZWN0aWZzIH07XG4gICAgfVxuICAgIGxldCB1cmxwQXBpID0gXCJodHRwczovL2dybGRmYXVyZS54eXpcIjtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgcG9zdHM7XG4gIDwvc2NyaXB0PlxuICBcbiAgPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5MZSBjb2xsZWN0aWY8L3RpdGxlPlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXhuMWNqbi5jc3NcIiAvPlxuICA8L3N2ZWx0ZTpoZWFkPlxuICB7I2lmIHBvc3RzfVxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICB7I2VhY2ggcG9zdHMgYXMgcG9zdCwgaX1cbiAgICA8ZGl2IGNsYXNzPXtpICUgMiA9PSAwID8gXCJpbXBhaXJcIiA6IFwicGFpclwifT5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+e3Bvc3Qubm9tfTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtwb3N0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXNpZGU+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3VybHBBcGkgKyBwb3N0LnByb2ZpbGltYWdlLnVybH1cbiAgICAgICAgICBhbHQ9e1wicG9ydHJhaXQgZGUgXCIgKyBwb3N0Lm5vbX1cbiAgICAgICAgLz5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gIHsvZWFjaH1cbiAgPC9kaXY+XG4gIHs6ZWxzZX1cbiAgPGRpdiBjbGFzcz1cInRlc3RcIj5GVUNLPC9kaXY+XG57L2lmfVxuICA8c3R5bGU+XG4gICAgLnRlc3R7Zm9udC1zaXplOjEwMHZ3fVxuICAgIC5jb250ZW50e1xuICAgICAgICBmb250LWZhbWlseTogaW50ZXJzdGF0ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LWZhbWlseTogSW50ZXJzdGF0ZTtcbiAgICB9XG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBtYXgtd2lkdGg6IDIycmVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWYxMWExO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIGFzaWRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTByZW07XG4gICAgfVxuICAgIC5wYWlye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG4gICAgLnBhaXIgaDIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2NiU7XG4gICAgICBtYXgtd2lkdGg6NDByZW07XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgICAgLmNvbnRlbnR7XG4gICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgICAgaW1ne1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICB9XG4gICAgICAucGFpciBoMiB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIHB7XG4gICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIH1cbiAgfVxuICA8L3N0eWxlPlxuICAiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkF1Q1MsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFHSyxHQUFJLElBQUMsR0FBRzs7Ozt5QkFFVixHQUFJLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FLWixPQUFPLFlBQUcsR0FBSSxJQUFDLFdBQVcsQ0FBQyxHQUFHO3dDQUM5QixjQUFjLFlBQUcsR0FBSSxJQUFDLEdBQUc7Ozs7O29EQVZ4QixHQUFDLE1BQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBRWpDLEdBQUksSUFBQyxHQUFHO2dFQUVWLEdBQUksSUFBQyxXQUFXOzsyREFLWixPQUFPLFlBQUcsR0FBSSxJQUFDLFdBQVcsQ0FBQyxHQUFHOzs7O2lFQUM5QixjQUFjLFlBQUcsR0FBSSxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWJqQyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbENGLFdBQVcsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7O2VBWUQsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BQ3JDLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BR2IsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxXQUFXO1VBRVgsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVTs7O0lBRXJDLE9BQU8sR0FBRyx1QkFBdUI7Ozs7O09BSTFCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
