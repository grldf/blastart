import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, r as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, l as children, m as claim_text, b as detach_dev, f as claim_space, h as add_location, g as attr_dev, k as insert_dev, j as append_dev, w as set_data_dev, n as noop, x as destroy_each } from './client.76287d81.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/video/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/video/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (30:0) {#each videos as video}
function create_each_block(ctx) {
	let div;
	let h3;
	let t0_value = /*video*/ ctx[1].titre + "";
	let t0;
	let t1;
	let video;
	let track;
	let video_src_value;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			h3 = element("h3");
			t0 = text(t0_value);
			t1 = space();
			video = element("video");
			track = element("track");
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, t0_value);
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);

			video = claim_element(div_nodes, "VIDEO", {
				src: true,
				controls: true,
				type: true,
				class: true
			});

			var video_nodes = children(video);
			track = claim_element(video_nodes, "TRACK", { kind: true });
			video_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 31, 4, 636);
			attr_dev(track, "kind", "captions");
			add_location(track, file, 33, 8, 739);
			if (video.src !== (video_src_value = urlpApi + /*video*/ ctx[1].video.url)) attr_dev(video, "src", video_src_value);
			video.controls = true;
			attr_dev(video, "type", "video/mp4");
			attr_dev(video, "class", "svelte-16hq6zi");
			add_location(video, file, 32, 4, 663);
			add_location(div, file, 30, 0, 626);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h3);
			append_dev(h3, t0);
			append_dev(div, t1);
			append_dev(div, video);
			append_dev(video, track);
			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*videos*/ 1 && t0_value !== (t0_value = /*video*/ ctx[1].titre + "")) set_data_dev(t0, t0_value);

			if (dirty & /*videos*/ 1 && video.src !== (video_src_value = urlpApi + /*video*/ ctx[1].video.url)) {
				attr_dev(video, "src", video_src_value);
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
		source: "(30:0) {#each videos as video}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let each_value = /*videos*/ ctx[0];
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
			attr_dev(div, "class", "container svelte-16hq6zi");
			add_location(div, file, 28, 0, 578);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*urlpApi, videos*/ 1) {
				each_value = /*videos*/ ctx[0];
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

const videoQuery = gql`
  query video {
        jpvideos{
            titre
  	        video{
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

	const results = await client.query({ query: videoQuery });
	return { videos: results.data.jpvideos };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Video", slots, []);
	let { videos } = $$props;
	const writable_props = ["videos"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Video> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		videoQuery,
		preload,
		urlpApi,
		videos
	});

	$$self.$inject_state = $$props => {
		if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [videos];
}

class Video extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { videos: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Video",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*videos*/ ctx[0] === undefined && !("videos" in props)) {
			console.warn("<Video> was created without expected prop 'videos'");
		}
	}

	get videos() {
		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set videos(value) {
		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Video;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDNkZGFlMzMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdmlkZW8vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuXG5jb25zdCB2aWRlb1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB2aWRlbyB7XG4gICAgICAgIGpwdmlkZW9ze1xuICAgICAgICAgICAgdGl0cmVcbiAgXHQgICAgICAgIHZpZGVve1xuICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgfVxuICB9XG59XG5gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiB2aWRlb1F1ZXJ5LFxuICB9KTtcbiAgcmV0dXJuIHsgdmlkZW9zOiByZXN1bHRzLmRhdGEuanB2aWRlb3MgfTtcbn1cbmxldCB1cmxwQXBpID0gXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6XCI7XG48L3NjcmlwdD5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCB2aWRlb3M7XG48L3NjcmlwdD5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbnsjZWFjaCB2aWRlb3MgYXMgdmlkZW99XG48ZGl2PlxuICAgIDxoMz57dmlkZW8udGl0cmV9PC9oMz5cbiAgICA8dmlkZW8gc3JjPSB7dXJscEFwaSArIHZpZGVvLnZpZGVvLnVybH0gY29udHJvbHMgIHR5cGU9XCJ2aWRlby9tcDRcIj5cbiAgICAgICAgPHRyYWNrIGtpbmQ9XCJjYXB0aW9uc1wiICAvPlxuICAgIDwvdmlkZW8+XG48L2Rpdj5cbnsvZWFjaH1cbjwvZGl2PlxuPHN0eWxlPlxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxNXB4IDIwcHggMCAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICB9XG4gIHZpZGVve31cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzswQkErQlMsR0FBSyxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBQ0gsT0FBTyxhQUFHLEdBQUssSUFBQyxLQUFLLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBRGpDLEdBQUssSUFBQyxLQUFLOztnRUFDSCxPQUFPLGFBQUcsR0FBSyxJQUFDLEtBQUssQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUhuQyxHQUFNOzs7O2dDQUFYLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUFDLEdBQU07Ozs7K0JBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMUJBLFVBQVUsR0FBRyxHQUFHOzs7Ozs7Ozs7OztlQVVBLE9BQU87T0FDckIsTUFBTSxPQUFPQSxhQUFZO0dBQzdCLEdBQUcsRUFBRSxtQ0FBbUM7R0FDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FFYixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDaEMsS0FBSyxFQUFFLFVBQVU7VUFFVixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzs7SUFFcEMsT0FBTyxHQUFHLDJCQUEyQjs7Ozs7T0FHMUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
