import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as toggle_class, m as insert_dev, n as append_dev, o as set_data_dev, p as noop, q as validate_each_argument, r as create_component, u as claim_component, w as mount_component, x as transition_in, y as transition_out, z as destroy_component, A as query_selector_all, B as listen_dev, C as check_outros, D as destroy_each, E as run_all, F as group_outros } from './client.84a53aba.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/components/Slide.svelte generated by Svelte v3.35.0 */

const file$1 = "src/components/Slide.svelte";

function create_fragment$1(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let t2;
	let t3;
	let img;
	let img_src_value;
	let t4;
	let div1;
	let p;
	let a;
	let t5;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text(/*slideNo*/ ctx[2]);
			t1 = text(" / ");
			t2 = text(/*totalSlide*/ ctx[3]);
			t3 = space();
			img = element("img");
			t4 = space();
			div1 = element("div");
			p = element("p");
			a = element("a");
			t5 = text(/*infos*/ ctx[5]);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*slideNo*/ ctx[2]);
			t1 = claim_text(div0_nodes, " / ");
			t2 = claim_text(div0_nodes, /*totalSlide*/ ctx[3]);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			img = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t5 = claim_text(a_nodes, /*infos*/ ctx[5]);
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "numbertext svelte-87fpw4");
			add_location(div0, file$1, 11, 2, 232);
			if (img.src !== (img_src_value = /*imageUrl*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*alternText*/ ctx[1]);
			attr_dev(img, "class", "svelte-87fpw4");
			add_location(img, file$1, 12, 2, 289);
			attr_dev(a, "href", /*slug*/ ctx[6]);
			attr_dev(a, "class", "link svelte-87fpw4");
			add_location(a, file$1, 14, 7, 358);
			attr_dev(p, "class", "svelte-87fpw4");
			add_location(p, file$1, 14, 4, 355);
			attr_dev(div1, "class", "infos svelte-87fpw4");
			add_location(div1, file$1, 13, 2, 331);
			attr_dev(div2, "class", "mySlides svelte-87fpw4");
			toggle_class(div2, "show", /*imageShowing*/ ctx[4]);
			add_location(div2, file$1, 10, 0, 181);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, t2);
			append_dev(div2, t3);
			append_dev(div2, img);
			append_dev(div2, t4);
			append_dev(div2, div1);
			append_dev(div1, p);
			append_dev(p, a);
			append_dev(a, t5);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*slideNo*/ 4) set_data_dev(t0, /*slideNo*/ ctx[2]);
			if (dirty & /*totalSlide*/ 8) set_data_dev(t2, /*totalSlide*/ ctx[3]);

			if (dirty & /*imageUrl*/ 1 && img.src !== (img_src_value = /*imageUrl*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*alternText*/ 2) {
				attr_dev(img, "alt", /*alternText*/ ctx[1]);
			}

			if (dirty & /*infos*/ 32) set_data_dev(t5, /*infos*/ ctx[5]);

			if (dirty & /*slug*/ 64) {
				attr_dev(a, "href", /*slug*/ ctx[6]);
			}

			if (dirty & /*imageShowing*/ 16) {
				toggle_class(div2, "show", /*imageShowing*/ ctx[4]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Slide", slots, []);
	let { imageUrl } = $$props;
	let { alternText } = $$props;
	let { slideNo } = $$props;
	let { totalSlide } = $$props;
	let { imageShowing } = $$props;
	let { infos } = $$props;
	let { slug } = $$props;

	const writable_props = [
		"imageUrl",
		"alternText",
		"slideNo",
		"totalSlide",
		"imageShowing",
		"infos",
		"slug"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Slide> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(5, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(6, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({
		imageUrl,
		alternText,
		slideNo,
		totalSlide,
		imageShowing,
		infos,
		slug
	});

	$$self.$inject_state = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(5, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(6, slug = $$props.slug);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [imageUrl, alternText, slideNo, totalSlide, imageShowing, infos, slug];
}

class Slide extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			imageUrl: 0,
			alternText: 1,
			slideNo: 2,
			totalSlide: 3,
			imageShowing: 4,
			infos: 5,
			slug: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Slide",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*imageUrl*/ ctx[0] === undefined && !("imageUrl" in props)) {
			console.warn("<Slide> was created without expected prop 'imageUrl'");
		}

		if (/*alternText*/ ctx[1] === undefined && !("alternText" in props)) {
			console.warn("<Slide> was created without expected prop 'alternText'");
		}

		if (/*slideNo*/ ctx[2] === undefined && !("slideNo" in props)) {
			console.warn("<Slide> was created without expected prop 'slideNo'");
		}

		if (/*totalSlide*/ ctx[3] === undefined && !("totalSlide" in props)) {
			console.warn("<Slide> was created without expected prop 'totalSlide'");
		}

		if (/*imageShowing*/ ctx[4] === undefined && !("imageShowing" in props)) {
			console.warn("<Slide> was created without expected prop 'imageShowing'");
		}

		if (/*infos*/ ctx[5] === undefined && !("infos" in props)) {
			console.warn("<Slide> was created without expected prop 'infos'");
		}

		if (/*slug*/ ctx[6] === undefined && !("slug" in props)) {
			console.warn("<Slide> was created without expected prop 'slug'");
		}
	}

	get imageUrl() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageUrl(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get alternText() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alternText(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slideNo() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slideNo(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get totalSlide() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set totalSlide(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get imageShowing() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageShowing(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get infos() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set infos(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (60:0) {#each posts as post}
function create_each_block(ctx) {
	let slide;
	let current;

	slide = new Slide({
			props: {
				imageUrl: urlpApi + /*post*/ ctx[4].cover.url,
				alternText: /*post*/ ctx[4].titre,
				slideNo: /*imageShowIndex*/ ctx[1],
				totalSlide: /*posts*/ ctx[0].length,
				imageShowing: /*post*/ ctx[4].idP * -1 + /*posts*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1],
				infos: /*post*/ ctx[4].titre,
				slug: urlSlug + /*post*/ ctx[4].Slug
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(slide.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(slide.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(slide, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const slide_changes = {};
			if (dirty & /*posts*/ 1) slide_changes.imageUrl = urlpApi + /*post*/ ctx[4].cover.url;
			if (dirty & /*posts*/ 1) slide_changes.alternText = /*post*/ ctx[4].titre;
			if (dirty & /*imageShowIndex*/ 2) slide_changes.slideNo = /*imageShowIndex*/ ctx[1];
			if (dirty & /*posts*/ 1) slide_changes.totalSlide = /*posts*/ ctx[0].length;
			if (dirty & /*posts, imageShowIndex*/ 3) slide_changes.imageShowing = /*post*/ ctx[4].idP * -1 + /*posts*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1];
			if (dirty & /*posts*/ 1) slide_changes.infos = /*post*/ ctx[4].titre;
			if (dirty & /*posts*/ 1) slide_changes.slug = urlSlug + /*post*/ ctx[4].Slug;
			slide.$set(slide_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(slide.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(slide.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(slide, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(60:0) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div1;
	let div0;
	let t1;
	let a0;
	let t2;
	let t3;
	let a1;
	let t4;
	let current;
	let mounted;
	let dispose;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			a0 = element("a");
			t2 = text("❮");
			t3 = space();
			a1 = element("a");
			t4 = text("❯");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-u4ofl0\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			a0 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, "❮");
			a0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, "❯");
			a1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "BlastART";
			attr_dev(div0, "class", "container svelte-1b73k3d");
			add_location(div0, file, 58, 0, 1038);
			attr_dev(a0, "href", "#arrowL");
			attr_dev(a0, "class", "prev svelte-1b73k3d");
			add_location(a0, file, 71, 1, 1411);
			attr_dev(a1, "href", "#arrowR");
			attr_dev(a1, "class", "next svelte-1b73k3d");
			add_location(a1, file, 72, 1, 1477);
			add_location(div1, file, 57, 0, 1032);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div1, t1);
			append_dev(div1, a0);
			append_dev(a0, t2);
			append_dev(div1, t3);
			append_dev(div1, a1);
			append_dev(a1, t4);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(a0, "click", /*prevSlide*/ ctx[2], false, false, false),
					listen_dev(a1, "click", /*nextSlide*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*urlpApi, posts, imageShowIndex, urlSlug*/ 3) {
				each_value = /*posts*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
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

const imageQuery = gql`
	query cover{
	  projets(sort:"date:desc"){
		id
		idP
		titre
		cover {
		  url
		}
		Slug
	  }
	}
  `;

async function preload({ query }) {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: imageQuery });
	return { posts: results.data.projets };
}

const urlpApi = "https://www.grldfaure.xyz";
const urlSlug = "Projet/";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let { posts } = $$props;

	// slideshow change image	
	let imageShowIndex = 1;

	const prevSlide = () => {
		if (imageShowIndex === 1) {
			$$invalidate(1, imageShowIndex = posts.length);
		} else {
			$$invalidate(1, imageShowIndex -= 1);
		}
	};

	const nextSlide = () => {
		if (imageShowIndex === posts.length) {
			$$invalidate(1, imageShowIndex = 1);
		} else {
			$$invalidate(1, imageShowIndex += 1);
		}
	};

	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		Slide,
		imageQuery,
		preload,
		urlpApi,
		urlSlug,
		posts,
		imageShowIndex,
		prevSlide,
		nextSlide
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("imageShowIndex" in $$props) $$invalidate(1, imageShowIndex = $$props.imageShowIndex);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, imageShowIndex, prevSlide, nextSlide];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Routes> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzlmNmIyMDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NsaWRlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaW1hZ2VVcmw7XG4gIGV4cG9ydCBsZXQgYWx0ZXJuVGV4dDtcbiAgZXhwb3J0IGxldCBzbGlkZU5vO1xuICBleHBvcnQgbGV0IHRvdGFsU2xpZGU7XG4gIGV4cG9ydCBsZXQgaW1hZ2VTaG93aW5nO1xuICBleHBvcnQgbGV0IGluZm9zO1xuICBleHBvcnQgbGV0IHNsdWc7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cIm15U2xpZGVzXCIgY2xhc3M6c2hvdz17aW1hZ2VTaG93aW5nfT5cbiAgPGRpdiBjbGFzcz1cIm51bWJlcnRleHRcIj57c2xpZGVOb30gLyB7dG90YWxTbGlkZX08L2Rpdj5cbiAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9e2FsdGVyblRleHR9IC8+XG4gIDxkaXYgY2xhc3M9XCJpbmZvc1wiPlxuICAgIDxwPjxhIGhyZWY9e3NsdWd9IGNsYXNzPVwibGlua1wiPntpbmZvc308L2E+PC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5teVNsaWRlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuICAubnVtYmVydGV4dCB7XG4gICAgY29sb3I6IHJnYigyMjgsIDQ2LCAyNDUpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA4NXZoO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLmluZm9zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLmluZm9zIHAge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJnYigyMjgsIDQ2LCAyNDUpO1xuICB9XG4gIC5saW5rIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAgc29saWQgIHJnYigyMjgsIDQ2LCAyNDUpO1xuICAgIGJvcmRlci1yaWdodDogIHNvbGlkICByZ2IoMjI4LCA0NiwgMjQ1KTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAubXlTbGlkZXMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIH1cbiAgICAuc2hvdyB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gICAgfVxuICAgIC5pbmZvcyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5pbmZvcyBwe1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG4gIH1cbiAgLmxpbmt7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgYXtcbiAgICBmb250LXNpemU6MS4ycmVtO1xuICB9XG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0IGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuXHQgaW1wb3J0IFNsaWRlIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvU2xpZGUuc3ZlbHRlXCI7XG4gIGNvbnN0IGltYWdlUXVlcnkgPSBncWxgXG5cdHF1ZXJ5IGNvdmVye1xuXHQgIHByb2pldHMoc29ydDpcImRhdGU6ZGVzY1wiKXtcblx0XHRpZFxuXHRcdGlkUFxuXHRcdHRpdHJlXG5cdFx0Y292ZXIge1xuXHRcdCAgdXJsXG5cdFx0fVxuXHRcdFNsdWdcblx0ICB9XG5cdH1cbiAgYDtcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBxdWVyeSB9KSB7XG5cdGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuXHQgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcblx0ICAgIGZldGNoOiB0aGlzLmZldGNoLFxuXHR9KTtcblx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG5cdCAgcXVlcnk6IGltYWdlUXVlcnksXG5cdH0pO1xuXHRyZXR1cm4geyBwb3N0czogcmVzdWx0cy5kYXRhLnByb2pldHMgfTtcbn1cblxuICBjb25zdCB1cmxwQXBpID0gXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6XCI7XG4gIGNvbnN0IHVybFNsdWcgPSBcIlByb2pldC9cIjtcblx0XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBwb3N0cztcbi8vIHNsaWRlc2hvdyBjaGFuZ2UgaW1hZ2VcdFxuIGxldCBpbWFnZVNob3dJbmRleCA9IDE7XG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcblx0ICBpZihpbWFnZVNob3dJbmRleCA9PT0gMSApe1xuXHRcdCBpbWFnZVNob3dJbmRleCA9IHBvc3RzLmxlbmd0aDtcblx0ICB9ZWxzZXtcblx0XHRpbWFnZVNob3dJbmRleCAtPSAxO1xuXHQgIH1cblx0fTtcbiAgXG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcblx0ICBpZiAoaW1hZ2VTaG93SW5kZXggPT09IHBvc3RzLmxlbmd0aCl7XG5cdFx0ICBpbWFnZVNob3dJbmRleCA9IDFcblx0ICB9ZWxzZXtcblx0XHRpbWFnZVNob3dJbmRleCArPSAxO1xuXHQgIH1cblx0fSA7XG5cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5CbGFzdEFSVDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdj5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbnsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuICA8U2xpZGUgaW1hZ2VVcmw9e3VybHBBcGkgKyBwb3N0LmNvdmVyLnVybH0gXG5cdFx0ICAgYWx0ZXJuVGV4dD17cG9zdC50aXRyZX0gXG5cdFx0ICAgc2xpZGVObz17aW1hZ2VTaG93SW5kZXh9XG5cdFx0ICAgdG90YWxTbGlkZT17cG9zdHMubGVuZ3RofVxuXHRcdCAgIGltYWdlU2hvd2luZz17KHBvc3QuaWRQICogLTEpICsgcG9zdHMubGVuZ3RoICsgMSA9PT0gaW1hZ2VTaG93SW5kZXh9XG5cdFx0ICAgaW5mb3M9e3Bvc3QudGl0cmV9XG5cdFx0ICAgc2x1Zz17dXJsU2x1ZyArIHBvc3QuU2x1Z31cblx0XHQgICAvPlxuey9lYWNofVxuPC9kaXY+XG4gPCEtLSBOZXh0IGFuZCBwcmV2aW91cyBidXR0b25zIC0tPlxuIDxhIGhyZWY9XCIjYXJyb3dMXCIgY2xhc3M9XCJwcmV2XCIgb246Y2xpY2s9e3ByZXZTbGlkZX0+JiMxMDA5NDs8L2E+XG4gPGEgaHJlZj1cIiNhcnJvd1JcIiBjbGFzcz1cIm5leHRcIiBvbjpjbGljaz17bmV4dFNsaWRlfT4mIzEwMDk1OzwvYT5cbjwvZGl2PlxuXG48c3R5bGU+XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4gLnByZXYsXG4ubmV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogcmdiKDIyOCwgNDYsIDI0NSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn0gXG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4gLm5leHQge1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn0gXG5cbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXG4ucHJldjpob3Zlcixcbi5uZXh0OmhvdmVyIHtcblx0Zm9udC1zaXplOiAzMHB4O1xufSBcbkBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgICAucHJldntcblx0XHQgbWFyZ2luLWxlZnQ6MHB4O1xuXHRcdCBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4yNjcpO1xuXHQgfVxuXHQgLm5leHR7XG5cdFx0IG1hcmdpbi1yaWdodDowcHg7XG5cdFx0IGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI2Nyk7XG5cdCB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBVzJCLEdBQU87OzRCQUFLLEdBQVU7Ozs7Ozs7dUJBR2IsR0FBSzs7Ozs7Ozs7MkNBSGQsR0FBTzs7OENBQUssR0FBVTs7Ozs7Ozs7Ozs7c0NBR2IsR0FBSzs7Ozs7Ozs7OztpREFGN0IsR0FBUTt1Q0FBTyxHQUFVOzs7Z0NBRXJCLEdBQUk7Ozs7Ozs7OytDQUpjLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFDbkIsR0FBTztpRUFBSyxHQUFVOzsyRUFDckMsR0FBUTs7Ozs7d0NBQU8sR0FBVTs7O3dEQUVELEdBQUs7OztpQ0FBekIsR0FBSTs7OztnREFKYyxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FUakMsUUFBUTtPQUNSLFVBQVU7T0FDVixPQUFPO09BQ1AsVUFBVTtPQUNWLFlBQVk7T0FDWixLQUFLO09BQ0wsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0NxREUsT0FBTyxZQUFHLEdBQUksSUFBQyxLQUFLLENBQUMsR0FBRzt5QkFDMUIsR0FBSSxJQUFDLEtBQUs7Z0NBQ2IsR0FBYzswQkFDWCxHQUFLLElBQUMsTUFBTTsyQkFDVCxHQUFJLElBQUMsR0FBRyxJQUFJLENBQUMsYUFBSSxHQUFLLElBQUMsTUFBTSxHQUFHLENBQUMsd0JBQUssR0FBYztvQkFDNUQsR0FBSSxJQUFDLEtBQUs7VUFDWCxPQUFPLFlBQUcsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFOWCxPQUFPLFlBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxHQUFHO2dFQUMxQixHQUFJLElBQUMsS0FBSztnRkFDYixHQUFjO2lFQUNYLEdBQUssSUFBQyxNQUFNO2tGQUNULEdBQUksSUFBQyxHQUFHLElBQUksQ0FBQyxhQUFJLEdBQUssSUFBQyxNQUFNLEdBQUcsQ0FBQyx3QkFBSyxHQUFjOzJEQUM1RCxHQUFJLElBQUMsS0FBSztpREFDWCxPQUFPLFlBQUcsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQVB2QixHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FZb0MsR0FBUzsyQ0FDVCxHQUFTOzs7Ozs7OzsyQkFiNUMsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUF4REUsVUFBVSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O2VBYUEsT0FBTyxHQUFHLEtBQUs7T0FDaEMsTUFBTSxPQUFPQSxhQUFZO0dBQzdCLEdBQUcsRUFBRSxtQ0FBbUM7R0FDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FFZixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDaEMsS0FBSyxFQUFFLFVBQVU7VUFFVixLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzs7TUFHN0IsT0FBTyxHQUFHLDJCQUEyQjtNQUNyQyxPQUFPLEdBQUcsU0FBUzs7Ozs7T0FLZixLQUFLOzs7S0FFWixjQUFjLEdBQUcsQ0FBQzs7T0FDZixTQUFTO01BQ1gsY0FBYyxLQUFLLENBQUM7bUJBQ3ZCLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTTs7bUJBRTlCLGNBQWMsSUFBSSxDQUFDOzs7O09BSWIsU0FBUztNQUNWLGNBQWMsS0FBSyxLQUFLLENBQUMsTUFBTTttQkFDbEMsY0FBYyxHQUFHLENBQUM7O21CQUVwQixjQUFjLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
