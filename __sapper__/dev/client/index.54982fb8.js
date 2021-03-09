import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, q as validate_each_argument, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, h as claim_space, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, o as set_data_dev, A as query_selector_all, p as noop, D as destroy_each } from './client.a4f9ef2d.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/Presse/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/Presse/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (38:0) {#each posts as article}
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
			add_location(img, file, 41, 2, 860);
			add_location(br, file, 42, 65, 996);
			attr_dev(span, "class", "svelte-gtmipr");
			add_location(span, file, 42, 71, 1002);
			attr_dev(a, "href", a_href_value = /*article*/ ctx[1].lien);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-gtmipr");
			add_location(a, file, 42, 5, 936);
			attr_dev(p, "class", "svelte-gtmipr");
			add_location(p, file, 42, 2, 933);
			attr_dev(article, "class", "svelte-gtmipr");
			add_location(article, file, 39, 0, 841);
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
			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = /*article*/ ctx[1].commentaire)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*posts*/ 1 && t1_value !== (t1_value = /*article*/ ctx[1].commentaire + "")) set_data_dev(t1, t1_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = /*article*/ ctx[1].lien)) {
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
		source: "(38:0) {#each posts as article}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let each_value = /*posts*/ ctx[0];
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
			add_location(div, file, 36, 0, 791);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts, urlpApi*/ 1) {
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

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "http://51.210.96.39:1337/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: presseQuery });
	return { posts: results.data.presses };
}

let urlpApi = "http://51.210.96.39:1337";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Presse", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Presse> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		presseQuery,
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

class Presse extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Presse",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Presse> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Presse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Presse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Presse;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTQ5ODJmYjguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvUHJlc3NlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuICBcbiAgICBjb25zdCBwcmVzc2VRdWVyeSA9IGdxbGBcbiAgICAgIHF1ZXJ5IHByZXNzZSB7XG4gICAgICAgIHByZXNzZXMoc29ydDpcImRhdGVQYXJ1dGlvbjpkZXNjXCIpe1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGNvbW1lbnRhaXJlXG4gICAgICAgICAgICBsaWVuXG4gICAgICAgICAgICBsb2dvU2l0ZXtcbiAgICAgICAgICAgICAgICB1cmxcbiAgXHQgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBgO1xuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgdXJpOiBcImh0dHA6Ly81MS4yMTAuOTYuMzk6MTMzNy9ncmFwaHFsXCIsXG4gICAgICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IHByZXNzZVF1ZXJ5LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBwb3N0czogcmVzdWx0cy5kYXRhLnByZXNzZXMgfTtcbiAgICB9XG4gICAgbGV0IHVybHBBcGkgPSBcImh0dHA6Ly81MS4yMTAuOTYuMzk6MTMzN1wiO1xuICA8L3NjcmlwdD5cbiAgXG4gIDxzY3JpcHQ+XG5cbiAgICBleHBvcnQgbGV0IHBvc3RzO1xuICA8L3NjcmlwdD5cbiAgPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5QcmVzc2U8L3RpdGxlPlxuICA8L3N2ZWx0ZTpoZWFkPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxueyNlYWNoIHBvc3RzIGFzIGFydGljbGV9XG5cbjxhcnRpY2xlPlxuICAgICAgXG4gIDxpbWcgc3JjPXt1cmxwQXBpICsgYXJ0aWNsZS5sb2dvU2l0ZS51cmx9IGFsdD17YXJ0aWNsZS5jb21tZW50YWlyZX0gLz5cbiAgPHA+PGEgaHJlZj17YXJ0aWNsZS5saWVufSB0YXJnZXQ9XCJfYmxhbmtcIj57YXJ0aWNsZS5jb21tZW50YWlyZX08YnIvPiA8c3Bhbj4mIzk3NTg7PC9zcGFuPjwvYT48L3A+XG48L2FydGljbGU+XG5cbnsvZWFjaH1cbjwvZGl2PlxuXG48c3R5bGU+XG5pbWd7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW46ODVweCAyMHB4IDAgMjBweDtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwxZnIpKTtcbiAgICBncmlkLWdhcDogMnJlbTtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgfVxuLmNvbnRhaW5lciA+IGFydGljbGUge1xuICAgIGJvcmRlcjpzb2xpZCAxcHggI2VmMTFhMTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbn1cbmltZ3tcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZWYxMWExO1xufVxuYXJ0aWNsZXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDgwOTA7XG59XG5wLCBhe1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOiNmZmY7XG59XG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuc3Bhbjpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZWYxMWExO1xufVxuc3BhbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IzAwMDtcbn1cblxuPC9zdHlsZT4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBMEM2QyxHQUFPLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBRHBELE9BQU8sZUFBRyxHQUFPLElBQUMsUUFBUSxDQUFDLEdBQUc7b0RBQU8sR0FBTyxJQUFDLFdBQVc7Ozs7OztrREFDdEQsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQURkLE9BQU8sZUFBRyxHQUFPLElBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7NkVBQU8sR0FBTyxJQUFDLFdBQVc7Ozs7bUVBQ3ZCLEdBQU8sSUFBQyxXQUFXOzsyRUFBbEQsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUxuQixHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWpDSSxXQUFXLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7OztlQVlELE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztPQUNyQyxNQUFNLE9BQU9BLGFBQVk7R0FDN0IsR0FBRyxFQUFFLGtDQUFrQztHQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7OztPQUViLE9BQU8sU0FBUyxNQUFNLENBQUMsS0FBSyxHQUNoQyxLQUFLLEVBQUUsV0FBVztVQUVYLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU87OztJQUVsQyxPQUFPLEdBQUcsMEJBQTBCOzs7OztPQUs3QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
