import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, c as claim_element, b as children, f as detach_dev, g as claim_space, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, n as noop } from './client.cdf40edc.js';

/* src/routes/index.svelte generated by Svelte v3.35.0 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let div;
	let video;
	let video_src_value;
	let t;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			div = element("div");
			video = element("video");
			t = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			video = claim_element(div_nodes, "VIDEO", {
				autoplay: true,
				muted: true,
				loop: true,
				src: true,
				type: true,
				class: true
			});

			children(video).forEach(detach_dev);
			t = claim_space(div_nodes);
			img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true });
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			video.autoplay = true;
			video.muted = true;
			video.loop = true;
			if (video.src !== (video_src_value = "vidtext.mp4")) attr_dev(video, "src", video_src_value);
			attr_dev(video, "type", "video/mp4");
			attr_dev(video, "class", "svelte-1h6o1oq");
			add_location(video, file, 1, 1, 21);
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo deco");
			attr_dev(img, "class", "svelte-1h6o1oq");
			add_location(img, file, 2, 1, 93);
			attr_dev(div, "class", "video svelte-1h6o1oq");
			add_location(div, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, video);
			append_dev(div, t);
			append_dev(div, img);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTY3NzA1YjUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
