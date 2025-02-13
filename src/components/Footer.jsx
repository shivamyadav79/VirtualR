import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 py-10 text-center">
      {/* Divider Line for Separation */}
      <div className="border-t border-neutral-700 mx-6 my-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Grid (Centered) */}
        <div className="flex flex-col sm:flex-row justify-center text-center gap-12">
          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Getting Started</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Tutorials</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Community Forums</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Supported Devices</a></li>
              <li><a href="#" className="hover:text-white">System Requirements</a></li>
              <li><a href="#" className="hover:text-white">Downloads</a></li>
              <li><a href="#" className="hover:text-white">Release Notes</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Meetups</a></li>
              <li><a href="#" className="hover:text-white">Conferences</a></li>
              <li><a href="#" className="hover:text-white">Hackathons</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 my-6"></div>
        <div className="flex flex-col sm:flex-row justify-center items-center text-xs text-neutral-500">
          <p>© 2025 VirtualR. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
