export function Demo2() {
  return (
    <div>
      <div className="max-w-lg mx-auto space-y-4">
        <p>
          Tailwind CSS v4 introduced improvements to the group feature, which
          allows you to style elements based on the state of a parent element.
          Let me explain how it works with an example in your component.
        </p>
        <p>The Tailwind CSS v4 group feature has two main ways to use it:</p>
        <ul className="list-disc list-inside">
          <li>
            Basic group: Add <em>group</em> class to a parent element and use
            <em>group-$modifier$</em> prefixes on child elements to style them
            based on the parent's state.
          </li>
          <li>
            Named groups: Use <em>group/name</em> on a parent and
            <em>group-$modifier$/name</em> on children when you need multiple
            group contexts.
          </li>
        </ul>
        <p>
          In the example, when you hover over the first container, both the text
          and button change color. In the second example, a named group
          (sidebar) is used to target specific elements.
        </p>
      </div>

      <br />
      
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
        {/* Parent with group class */}
        <div className="group hover:bg-blue-100 p-4 rounded transition-colors">
          <h3 className="text-lg font-medium">Group Hover Example</h3>

          {/* Child elements that react to parent hover */}
          <p className="text-gray-500 group-hover:text-blue-700">
            This text changes color when parent is hovered
          </p>

          <button
            className="mt-3 px-4 py-2 bg-gray-200 rounded 
          group-hover:bg-blue-500 group-hover:text-white transition-colors"
          >
            Button changes too
          </button>
        </div>

        {/* Group with modifiers example */}
        <div className="group/sidebar mt-8 bg-gray-100 p-4 rounded-lg hover:bg-gray-200">
          <h3 className="font-medium">Named Group Example</h3>
          <p className="text-gray-500 group-hover/sidebar:text-gray-900">
            This uses a named group modifier
          </p>
        </div>
      </div>
    </div>
  );
}
