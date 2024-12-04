import React from "react";
import { SectionCard, PageTitle } from "../../components/atoms";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { 
  DashboardTemplate, 
  FormTemplate, 
  ListTemplate, 
  DetailTemplate 
} from "../../components/templates";

const Templates = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Templates", href: "/design-system/templates" },
            ]}
            onMenuClick={toggleDrawer}
            actions={[
              {
                label: "View Source",
                onClick: () =>
                  window.open(
                    "https://github.com/yourusername/SwAdmin/tree/main/src/components/templates",
                    "_blank"
                  ),
                leadingIcon: "code",
              },
            ]}
          />
          <PageTitle
            title="Templates"
            description="Reusable page layout templates for consistent application structure."
          />
        </>
      }
      content={
        <div className="space-y-8">
          {/* Grid with Navigation Template */}
          <div className="space-y-4">
            <h2 className="text-headline-m">Grid with Navigation</h2>
            <p className="text-body-l text-on-muted">
              A responsive grid layout with a navigation sidebar that collapses into a drawer on mobile devices.
            </p>
          </div>

          {/* Dashboard Template */}
          <SectionCard title="Dashboard Template">
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">Basic Layout</h3>
              <div className="border rounded-lg p-4">
                <DashboardTemplate 
                  header={<div className="text-title-m">Dashboard Header</div>}
                  sidebar={<div className="text-body-m">Sidebar Navigation</div>}
                  content={<div className="text-body-m">Main Dashboard Content</div>}
                  footer={<div className="text-label-s">Dashboard Footer</div>}
                />
              </div>
            </div>
          </SectionCard>

          {/* Form Template */}
          <SectionCard title="Form Template">
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">Registration Form</h3>
              <div className="border rounded-lg p-4">
                <FormTemplate 
                  title="User Registration"
                  description="Create a new user account"
                  form={
                    <div className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full p-2 border rounded" 
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-2 border rounded" 
                      />
                      <button 
                        className="w-full p-2 bg-primary text-fill-on rounded"
                      >
                        Register
                      </button>
                    </div>
                  }
                />
              </div>
            </div>
          </SectionCard>

          {/* List Template */}
          <SectionCard title="List Template">
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">User List</h3>
              <div className="border rounded-lg p-4">
                <ListTemplate 
                  title="User Management"
                  description="List of registered users"
                  list={
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 border-b">
                        <span>John Doe</span>
                        <span>Admin</span>
                      </div>
                      <div className="flex justify-between p-2 border-b">
                        <span>Jane Smith</span>
                        <span>User</span>
                      </div>
                      <div className="flex justify-between p-2 border-b">
                        <span>Mike Johnson</span>
                        <span>Editor</span>
                      </div>
                    </div>
                  }
                  actions={
                    <button className="w-full p-2 bg-primary text-fill-on rounded">
                      Add New User
                    </button>
                  }
                />
              </div>
            </div>
          </SectionCard>

          {/* Detail Template */}
          <SectionCard title="Detail Template">
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">User Profile</h3>
              <div className="border rounded-lg p-4">
                <DetailTemplate 
                  title="User Profile"
                  description="Detailed information about a user"
                  details={
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Name:</span>
                        <span>John Doe</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span>john.doe@example.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Role:</span>
                        <span>Administrator</span>
                      </div>
                    </div>
                  }
                  actions={
                    <div className="flex space-x-2">
                      <button className="flex-1 p-2 bg-primary text-fill-on rounded">
                        Edit Profile
                      </button>
                      <button className="flex-1 p-2 bg-content-error text-fill-on rounded">
                        Deactivate
                      </button>
                    </div>
                  }
                />
              </div>
            </div>
          </SectionCard>
        </div>
      }
    />
  );
};

export default Templates;
